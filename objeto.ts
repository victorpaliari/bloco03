interface TurmaModelo{
    nome: string
    qtd: number
    materia: string
    p_instrutora: string
}

const Turma: TurmaModelo = {
    nome: "turma .NET",
    qtd: 32,
    materia: "Fullstack c#",
    p_instrutora: "Jacque"
}

console.log(Turma)

const Turma2: TurmaModelo = {
    nome: "turma .JS",
    qtd: 28,
    materia: "Turma .JS",
    p_instrutora: "Yuri"

}

console.log(Turma2)
