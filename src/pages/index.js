import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Marcos Bueno - Desenvolvedor Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Head>
      <header>
        <div className="container">
          <nav className="site-navbar">
            <a href="#" className="logo">Portfólio</a>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
            <button className="nav-toggler">
              <span></span>
            </button>
          </nav>
      </div>      
      </header>
      <section className="banner">
        <div className="layer"></div>
        <div className="textBx">
          <h2>Olá, eu sou<br/>
            <span>Marcos Bueno</span>
          </h2>
          <h3>Desenvolvedor Web</h3>
          <a href="#about" className="btn">Sobre</a>
        </div>
      </section>
      <section className="about" id="about">
        <div className="heading">
          <h2>Sobre mim</h2>
        </div>
        <div className="content">
          <div className="profileImage">
            <img src="images/perfil.jpg" width="200" height="200" alt="Foto de Marcos" className="img" />
          </div>
          <div className="aboutBx">
            <h3>Sou um desenvolvedor web</h3>
            <p>Olá, meu nome é Marcos Bueno, estudante de Engenharia de Computação, com experiência em
            desenvolvimento web. Apaixonado por
              Javascript, ReactJS, NodeJS e todo ecossistema em torno
              dessas tecnologias.</p>
            <h4>Habilidades:</h4>
            <ul>
              <li>HTML</li>
              <li>Design responsivo</li>
              <li>CSS</li>
              <li>JavaScript (ES6/7)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>WordPress</li>
              <li>Git</li>
              <li>Bancos relacionais (MySQL, PostgreSQL)</li>
              <li>Bancos não relacionais (MongoDB, Redis)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="heading white">
          <h2>Serviços</h2>
          <p>O que eu faço</p>
        </div>
        <div className="content">
          <div className="servicesBx">
            <i className="fa fa-laptop"></i>
            <h2>Programação</h2>
            <p>Desenvolvimento de sites responsivos (adaptáveis a qualquer
            dispositivo e/ou tamanho de tela).<br />
              Utilizando as mais atuais e recomendadas técnicas de desenvolvimento, 
              com aparência bonita, suave e personalizada. O trabalho é feito
              totalmente voltado às necessidades do projeto.</p>
          </div>
          <div className="servicesBx">
            <i className="fa fa-line-chart"></i>
            <h2>SEO</h2>
            <p>Aplicação de configurações e técnicas que ajudam a posicionar melhor
            nos resultados de buscas de sites como Google, Yahoo, Bing. Gerando
              assim um maior número de acessos, um maior alcance a um público que
              busca pelo assunto em questão e consequentemente maior fidelização
                e clientes.</p>
          </div>
          <div className="servicesBx">
            <i className="fa fa-bullhorn"></i>
            <h2>Marketing Digital</h2>
            <p>Gerenciar as redes sociais é muito mais que simplesmente fazer
            publicações. Uma gestão de mídias sociais envolve diversas etapas, que
              incluem desde a definição da estratégia e do posicionamento, o
              planejamento de publicações e a execução até o monitoramento e o
                levantamento dos resultados.</p>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="heading white">
          <h2>Contato</h2>
          <p>Vamos trabalhar juntos?</p>
        </div>
        <div className="content">
          <div className="contactInfo">
            <h3>Informações</h3>
            <div className="contactInfoBx">
              <div className="box">
                <div className="icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="text">
                  <h3>Localização</h3>
                  <p>Boituva, São Paulo</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="text">
                  <h3>E-mail</h3>
                  <p>marcosbtv94@gmail.com</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-github"></i>
                </div>
                <div className="text">
                  <h3>GitHub</h3>
                  <p><a href="https://github.com/marcos-bueno" target="_blank" rel="noopener noreferrer">/marcos-bueno</a></p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-linkedin"></i>
                </div>
                <div className="text">
                  <h3>LinkedIn</h3>
                  <p><a href="https://www.linkedin.com/in/marcos-bueno/" target="_blank" rel="noopener noreferrer">/marcos-bueno</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="formBx">
            <form name="contact" data-netlify="true">
              <p>
                <input type="text" name="name" placeholder="Nome" /> 
              </p>
              <p>
                <input type="email" name="email" placeholder="E-mail" />
              </p>
              <p>
                <textarea name="message" cols={30} rows={8} placeholder="Mensagem..."></textarea>
              </p>
              <p>
                <input type="submit" value="Enviar"/>
              </p>
            </form>
          </div>
        </div>
      </section>
      <div className="developer">
        <p>Copyright © 2020 Marcos Bueno. Desenvolvido com Next.js e ♥!</p>
      </div>
      <div className="float-sm">
        <div className="fl-fl float-fb">
          <i className="fa fa-facebook"></i>
          <a href="https://www.facebook.com/sharer.php?u=https://marcosbueno.netlify.app" target="_blank">Compartilhar</a>
        </div>
        <div className="fl-fl float-tw">
          <i className="fa fa-twitter"></i>
          <a href="https://twitter.com/intent/tweet?text=Marcos Bueno - Desenvolvedor Web&amp;url=https://marcosbueno.netlify.app" target="_blank">Tweet</a>
        </div>
        <div className="fl-fl float-wa">
          <i className="fa fa-whatsapp"></i>
          <a href="https://api.whatsapp.com/send/?phone=5515997403087&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+seu+trabalho.+Vamos+conversar%3F&app_absent=0" target="_blank">WhatsApp</a>
        </div>
      </div>
      <div id="back-to-top" className="back-to-top"></div>
      <script src="../../scripts.js"></script>
    </>
  )
}
