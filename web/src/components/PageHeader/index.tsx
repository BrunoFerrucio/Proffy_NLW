import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Logo" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>} {/*if ternario, com && só executa a segunda parte se a primeira for verdadeira*/}
                
                {props.children}
            </div>
            {/* tudo para o que tá dentro do pageHeader */}
        </header>
    );
}

export default PageHeader;