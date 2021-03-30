let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Kartu Tri (3) [08979519691]
│ Terima Kasih
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
