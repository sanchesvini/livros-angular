import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    // Preencher o vetor editoras com o método getEditoras de servEditora
    this.editoras = this.servEditora.getEditoras();

    // Preencher o vetor livros com o método obterLivros de servLivros
    this.livros = this.servLivros.obterLivros();
  }

  // Método para excluir um livro com base no código
  excluir = (codigo: number): void => {
    // Invocar o método excluir de servLivros
    this.servLivros.excluir(codigo);

    // Preencher novamente o vetor livros com o método obterLivros de servLivros
    this.livros = this.servLivros.obterLivros();
  };

  // Método para obter o nome da editora com base no codEditora
  obterNome = (codEditora: number): string => {
    // Invocar o método getNomeEditora de servEditora
    return this.servEditora.getNomeEditora(codEditora);
  };
}
