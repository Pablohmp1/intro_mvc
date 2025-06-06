import {AlunoModel} from '../models/Materia.model.js'

export class AlunoController{
	constructor(service, view) {
		view.render(service.alunos)
		this.view = view
		this.service = service
	}

	add(aluno) {
		this.service.add(new AlunoModel(aluno))
		this.view.render(this.service.alunos)
	}

	search(nome) {
		let data = this.service.search(nome)
		this.view.render(data)
	}
}