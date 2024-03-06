import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import xtudo from '../../img/x-tudo.jpg';
import React, { useEffect } from 'react';
import '../Home/css/Main.css';
import { Typed } from 'react-typed';
import cremeDeMorango from '../../img/creme de morango.jpg'
import cremeDeMaracuja from '../../img/creme de maracuja.jpg'

function Main() {
    return (
        <>
            <main className={`main-Home fade-in`}>
                <Container>
                    <br />
                    <h1>
                        MAIS PEDIDOS
                    </h1>
                    <br />
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='itens'>
                                <Image src={xtudo} rounded className='item-image swing-right'/>
                                <div className='sanduiche-info'>
                                    <br />
                                    <h3>X-tudo</h3>
                                    <p>O X-tudo é uma explosão de sabores em um único sanduíche. Com uma combinação irresistível de hambúrguer suculento, queijo derretido, bacon crocante, ovo frito, alface fresca, tomate e maionese especial, cada mordida é uma jornada gastronômica emocionante. Cada ingrediente é cuidadosamente selecionado para criar uma harmonia perfeita de texturas e sabores. Seja para matar a fome no almoço ou para satisfazer um desejo de conforto durante a noite, o X-tudo é a escolha definitiva para os amantes de sanduíches.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='itens'>
                                <Image src={xtudo} rounded className='item-image swing-left'/>
                                <div className='sanduiche-info'>
                                    <br />
                                    <h3>X-bacon</h3>
                                    <p> X-bacon é uma ode ao sabor defumado e salgado do bacon, combinado com a suculência do hambúrguer e a cremosidade do queijo derretido. Cada mordida é uma explosão de sabor, com camadas de bacon crocante, hambúrguer suculento, queijo derretido, alface fresca e tomate suculento, tudo abraçado por um pão macio e tostado. É uma experiência de sabor clássica e reconfortante que agrada a todos os paladares. Perfeito para qualquer hora do dia, o X-bacon é um favorito atemporal entre os amantes de sanduíches.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <br />
                        <h1>
                            BEBIDAS EM DESTAQUE
                        </h1>
                        <br />
                        <Col xs={12} md={6}>
                            <div className='itens'>
                                <Image src={cremeDeMorango}  rounded className='item-image swing-left'/>
                                <Image src={cremeDeMaracuja}  rounded className='item-image swing-right'/>
                                <div className='sanduiche-info'>
                                    <br />
                                    <h3>Cremes</h3>
                                    <p> X-bacon é uma ode ao sabor defumado e salgado do bacon, combinado com a suculência do hambúrguer e a cremosidade do queijo derretido. Cada mordida é uma explosão de sabor, com camadas de bacon crocante, hambúrguer suculento, queijo derretido, alface fresca e tomate suculento, tudo abraçado por um pão macio e tostado. É uma experiência de sabor clássica e reconfortante que agrada a todos os paladares. Perfeito para qualquer hora do dia, o X-bacon é um favorito atemporal entre os amantes de sanduíches.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Main;
