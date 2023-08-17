class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        // Cardápio com os valores dos itens e códigos
        const menu = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
        };

        // Verificando se há itens no carrinho
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let total = 0;

        for (const item of itens) {
            // Dividindo a string em partes, utilizando o separador "," (ex: suco, 3)
            const [codigo, quantidade] = item.split(",");
            
            if (!menu[codigo]) {
                return "Item inválido!";
            }

            // Calculando o valor do item
            const valorItem = menu[codigo] * quantidade;
            // Atribuindo o valor ao total
            total += valorItem;
            
            // Verificando se é um item extra e se o item principal existe no carrinho
            if (codigo === "chantily" || codigo === "queijo") {
                // Utilizando o operador ternário ("condicao" ? "valorSeVerdadeiro : "valorSeFalso) 
                // para atribuir à constante itemPrincipal 
                const itemPrincipal = codigo === "chantily" ? "cafe" : "sanduiche";
                // Verificando se o itemPrincipal existe antes de adicionar os extras
                if (!itens.includes(`${itemPrincipal},${quantidade}`)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
        }

        // Aplicando desconto ou acréscimo conforme o método de pagamento
        if (metodoDePagamento === "dinheiro") {
            total *= 0.95; // 5% de desconto
        } else if (metodoDePagamento === "credito") {
            total *= 1.03; // 3% de acréscimo
        } else if (metodoDePagamento == "debito") {
            total = total; // Permanece
        } else {
            return "Forma de pagamento inválida!";
        }

        // Formata o valor final como string "R$ 0,00"
        const valorFormatado = `R$ ${total.toFixed(2)}`;
        return valorFormatado;
    }

}

export {CaixaDaLanchonete};
