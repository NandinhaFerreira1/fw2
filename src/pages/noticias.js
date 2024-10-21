import { Container } from "react-bootstrap";
import Footer from "./componet/footer";
import Menu from "./componente/navbar";

export default function noticias(){
      var produtos = [
        [
            [
                {
                    id: 1,
                    "produto": "Notebook Gamer",
                    "descricao": "Notebook de alta performance, ideal para jogos e multitarefas, com processador potente e placa de vídeo dedicada."
                },
                {
                    id: 2,
                    "produto": "Smartphone Ultra",
                    "descricao": "Smartphone com tela grande, câmera de alta resolução e bateria de longa duração, perfeito para quem gosta de tecnologia."
                },
                {
                    id: 3,
                    "produto": "Fones de Ouvido Sem Fio",
                    "descricao": "Fones de ouvido sem fio com cancelamento de ruído, som de alta qualidade e design ergonômico para conforto durante o uso."
                },
                {
                    id: 4,
                    "produto": "Cafeteira Elétrica",
                    "descricao": "Cafeteira elétrica com programação automática, que prepara o café no ponto certo, ideal para começar o dia com energia."
                },
                {
                    id: 5,
                    "produto": "Relógio Inteligente",
                    "descricao": "Relógio inteligente com monitoramento de atividades físicas, batimentos cardíacos e notificações do smartphone, facilitando sua rotina."
                }
            ]
            
        ]
      ]

}



 
     return(
     <>
    <Menu />
    <Container>Lista
        {produtos.map(produto =>
            <div>
                <p>{produto.produto}</p>
                <p>{produto.descricao}</p>
            </div>
        )}
    </Container>
    <Footer />
    </>
     )
}