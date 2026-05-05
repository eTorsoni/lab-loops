let contatos = [
    {
        nome: "Maxwell Wright",
        telefone: "(0191) 719 6495",
        email: "curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        nome: "Raja Villarreal",
        telefone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        nome: "Helen Richards",
        telefone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let opcao;

while (opcao !== "encerrar") {

    opcao = prompt(
        "Escolha uma opção:\n" +
        "primeiro - Mostrar primeiro contato\n" +
        "ultimo - Mostrar último contato\n" +
        "todos - Mostrar todos os contatos\n" +
        "novo - Adicionar novo contato\n" +
        "encerrar - Sair do programa"
    );

    if (opcao === "primeiro") {

        let contato = contatos[0];

        console.log(
            contato.nome + " / " +
            contato.telefone + " / " +
            contato.email
        );

    } else if (opcao === "ultimo") {

        let contato = contatos[contatos.length - 1];

        console.log(
            contato.nome + " / " +
            contato.telefone + " / " +
            contato.email
        );

    } else if (opcao === "todos") {

        for (let contato of contatos) {

            console.log(
                contato.nome + " / " +
                contato.telefone + " / " +
                contato.email
            );
        }

    } else if (opcao === "novo") {

        let nome = prompt("Digite o nome:");
        let telefone = prompt("Digite o telefone:");
        let email = prompt("Digite o email:");

        contatos.push({
            nome: nome,
            telefone: telefone,
            email: email
        });

        console.log("Novo contato adicionado!");

    } else if (opcao === "encerrar") {

        console.log("Programa encerrado.");

    } else {

        console.log("Opção inválida!");
    }
}