import React from 'react';
import './Head.css';

const Apresentacao = () => {
    return (
        <div>
            <header>
                <div className="profile-picture">
                    <img src="seu-foto.jpg" alt="Foto de Perfil" />
                </div>
                <div className="header-content">
                    <h1>Lucas Tomaz</h1>
                    <p>Email: <a href="mailto:lucastomaz44lt@gmail.com">lucastomaz44lt@gmail.com</a></p>
                    <p>Telefone: (11) 93748-0733</p>
                </div>
            </header>

            <main>
                <section className="about">
                    <h2>Sobre Mim</h2>
                    <p>Meu nome é Lucas, sou estudante de ciência da computação e participo do GTHC desde 2022. Gosto de projetos de análise de dados e que envolvam python e SQL.</p>
                </section>

                <section className="education">
                    <h2>Formação Acadêmica</h2>
                    <div className="education-item">
                        <h3>UFABC</h3>
                        <p><strong>Curso:</strong>Bacharelado em Ciência e Tecnologia (BI) + Bacharelado em Ciência da Computação</p>
                        <p><strong>Período:</strong> 2020 - 2025</p>
                    </div>
                    {/* Adicione mais formações conforme necessário */}
                </section>

                <section className="skills">
                    <h2>Habilidades</h2>
                    <ul>
                        <li>Trabalho em equipe</li>
                        <li>Análise de dados</li>
                        <li>Desenvolvimento de projetos</li>
                        <li>Agilidade</li>
                        {/* Adicione mais habilidades conforme necessário */}
                    </ul>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Lucas Tomaz</p>
            </footer>
        </div>
    );
};

export default Apresentacao;
