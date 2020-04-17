require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || "Andrew Hudson's Site",
    url: META_URL || '',
    description: META_DESC || 'Bleurgh',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#F5D300',
    email: META_EMAIL || undefined,
    telephone: META_TELEPHONE || undefined,
    dateFormat: 'dd LLLL yyyy'
}
