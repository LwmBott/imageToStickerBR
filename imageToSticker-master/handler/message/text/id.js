exports.textTnC = () => {
    return `
Código-fonte / bot é um programa de código aberto (gratuito) escrito usando Javascript, você pode usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e ou vender cópias sem remover o principal autor deste código-fonte / bot.

Ao usar este código-fonte / bot, então você concorda com os Termos e Condições da seguinte forma:
- Código fonte / bot não armazena seus dados em nossos servidores.
- Código fonte / bot não é responsável pelo adesivo que você faz a partir deste bot, bem como vídeos, imagens e outros dados que você obtém a partir do código fonte / bot.
- Código-fonte/bot não deve ser usado para serviços que visam/contribuem em:
• sexo/tráfico humano
• jogo
• comportamentos viciantes adversos
• crime
• violência (a menos que seja necessário para proteger a segurança pública)
• Queimadas/desmatamento da floresta
• discurso de ódio ou discriminação com base na idade, gênero, identidade de gênero, raça, sexualidade, religião, nacionalidade

Código Fonte BOT : https://github.com/YogaSakti/imageToSticker
Biblioteca do WhatsApp nodeJS: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `
Olá, ${pushname}! 👋️
Aqui estão algumas das características deste bot!✨

Criador de adesivos:
1. *#sticker*
Para transformar a imagem em um adesivo. 
Uso: envie uma imagem com uma legenda #sticker ou responda a uma imagem enviada #sticker

2. *#sticker* _<Url Gambar>_
Para alterar a imagem de url para adesivo. 
Usar: 

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
Para converter gif em adesivo (Somente Giphy)
Uso: Envie uma mensagem no formato *gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

4. *#memesticker* _<teks atas>_ | _<teks bawah>_
Para criar um adesivo de meme com texto superior e inferior
Uso: enviar fotos com a legenda _*#meme aku atas | kamu bawah*_ ou você também pode responder a uma imagem existente.


Downloader:
1. *#tiktok* _<tiktok url>_
Para baixar um vídeo de um vídeo do TikTok.
Uso: envie uma mensagem no formato *#tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922*

2. *#fb* _<post/video url>_
Para baixar um vídeo do Facebook.   
Uso: enviar mensagens no formato *#fb https://www.facebook.com/.....*

3. *#ig* _<instagram post url>_
Para baixar fotos e vídeos do instagram.
Uso: enviar mensagens no formato *#ig https://www.instagram.com/p/BPOd1vhDMIp/*

4. *#twt* _<twitter post url>_
Para baixar fotos e vídeos do Twitter.
Uso: enviar mensagens no formato *#twt https://twitter.com/ntsana_/status/1306108656887324672*

Lain-lain:
1. *#translate* _<código de linguagem>_
Para interpretar a mensagem no idioma especificado.
Uso: Balas/quote/reply a mensagem que deseja traduzir com _*#translate id*_ <-id é o código de idioma. código de idioma pode ser encontrado em *https://bit.ly/33FVldE*

2. *#resi* _<kurir>_ _<nomer resi>_
Para verificar o status da entrega de mercadorias, a lista de entregadores: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, primeiro, ninja, leão, idl, rex.
Uso: envie uma mensagem com o formato _*#resi jne 1238757632*_

3. *#meme* _<texto superior>_ | _<texto inferior>_
Para criar memes com texto superior e inferior
Uso: enviar fotos com a legenda _*#meme até | você está para baixo*_, ou você também pode responder a uma imagem existente.

4. *#ceklokasi*
Verifique a localização da propagação do covid-19 na área ao seu redor (kelurahan).
Uso: envie sua localização e responda/cite/responda o local que você enviou com _*#ceklokasi*_

5. *#tnc*
Exibir termos e condições do bot.

6. *#donasi*
exibir informações de doação.

Tenha um otimo dia! site caso o bot mude de número: http://lwmbot.ddns.net ✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Grupo de Administração Apenas] ⚠ 
Aqui estão algumas das características administrativas do grupo neste bot!

1. *#kick* @user
Para remover um membro de um grupo (pode ser mais de 1).

2. *#promote* @user
Untuk mempromosikan member menjadi Admin grup.

3. *#demote* @user
Untuk demosikan Admin grup.

4. *#tagall*
Para mencionar todos os membros do grupo. (Somente Premium)

5. *#del*
Para excluir uma mensagem de bot (responda a uma mensagem de bot #del)`
}

exports.textDonasi = () => {
    return `
Oi, obrigado por usar este bot, para apoiar este bot você pode ajudar doando através do seguinte link:
1. Saweria: https://saweria.co/yogasakti
2. Trakteer: https://trakteer.id/red-emperor

As doações serão utilizadas para o desenvolvimento e operação deste bot.

Obrigado.`
}
