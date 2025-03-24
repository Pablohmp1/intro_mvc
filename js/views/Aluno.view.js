class AlunoView{
    constructor(table){
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
    this.materias = ["backend_1", "frontend_2", "bancodedados", "ferra,emntas"]

    this.renderHeader()
    }   

    renderHeader( ) {
        const htmlHeader = document.createElement('tr') 
        htmlHeader.innerHTML = '<td>Nome</td>'
        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')
        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableHeader.appendChild(htmlHeader)
    }
    
    render(alunos) {
        alunos.forEach(aluno => {
            let htmlRow = document.createElement('tr')
            htmlRow.innerHTML = `<td>${aluno.nome}</td>`
            this.materias.forEach(materia => {
                htmlRow.innerHTML += `<td>${aluno.notas[materia]}</td>`
            })
            this.tableBody.appendChild(htmlRow)
        })
    }
}