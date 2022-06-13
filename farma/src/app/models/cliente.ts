export interface Cliente{
    id?: String,
    nome: String, 
    documento: String,
    email?: String,
    telefone?: String,
    endereco?:{
        cep: String,
        complemento: String,
        bairro: String,
        cidade: String,
        uf: String
        },
    desativar: Boolean
}