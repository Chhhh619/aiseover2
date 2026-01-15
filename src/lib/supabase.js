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
