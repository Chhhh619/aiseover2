import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Submit contact form data to Supabase
 * @param {Object} formData - The form data to submit
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitContactForm(formData) {
    try {
        const { error } = await supabase
            .from('contact_submissions')
            .insert([
                {
                    email: formData.email,
                    whatsapp: formData.whatsapp,
                    company: formData.company,
                    website: formData.website || null,
                    company_size: formData.size,
                    package: formData.package,
                    message: formData.message || null,
                    submitted_at: new Date().toISOString(),
                    source: formData.source || 'website'
                }
            ])

        if (error) {
            console.error('Supabase error:', error)
            return { success: false, error: error.message }
        }

        return { success: true }
    } catch (err) {
        console.error('Submit error:', err)
        return { success: false, error: err.message }
    }
}

/**
 * Get total count of all generated articles
 * @returns {Promise<{count: number, error?: string}>}
 */
export async function getArticleCount() {
    try {
        const { count, error } = await supabase
            .from('generated_articles')
            .select('*', { count: 'exact', head: true })

        if (error) {
            console.error('Supabase error:', error)
            return { count: 0, error: error.message }
        }

        return { count: count || 0 }
    } catch (err) {
        console.error('Get article count error:', err)
        return { count: 0, error: err.message }
    }
}

/**
 * Subscribe to real-time article count changes
 * @param {function} onInsert - Callback when a new article is inserted
 * @returns {function} Unsubscribe function
 */
export function subscribeToArticleChanges(onInsert) {
    const channel = supabase
        .channel('articles-count')
        .on(
            'postgres_changes',
            { event: 'INSERT', schema: 'public', table: 'generated_articles' },
            () => onInsert()
        )
        .subscribe()

    return () => {
        supabase.removeChannel(channel)
    }
}
