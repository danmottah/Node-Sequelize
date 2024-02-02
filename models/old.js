Postagem.create({
    titulo: "Um título qualquer",
    conteudo: "Um conteudo qualquer..."
})

Usuario.create({
    nome: 'Robsin',
    sobrenome: 'Santos',
    idade: '35',
    email: 'robson_net@live.com'
})

Usuario.update({ nome: "Robson" }, {
    where: {
        nome: 'Robsin'
    }
})

Usuario.destroy({
    where: {
        nome: 'Robson'
    }
})

const usuario = await Usuario.findOne({ where: { nome: 'Danilo' } });
if (usuario === null) {
    console.log('Not found!');
} else {
    console.log(usuario instanceof Usuario); // true
    console.log(usuario.nome); // 'My Title'
}

// select by id
async function buscarUsuario() {
    try {
        const usuario = await Usuario.findOne({ where: { id: '1' } });

        if (usuario === null) {
            console.log('Not found!');
        } else {
            console.log(usuario instanceof Usuario); // true
            console.log(usuario.id);
            console.log(usuario.nome);
            console.log(usuario.idade);
            console.log(usuario.email);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Chame a função assíncrona
buscarUsuario();