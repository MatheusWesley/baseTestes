
var Pessoa = {
  // ATRIBUTOS
  nome: [],
  cpf: [],
  email: [],
  // METODOS
  capturaDados: function() {
    var capNome = document.getElementById('nome').value;
    var capCPF = document.getElementById('cpf').value;
    var capEmail = document.getElementById('email').value;
     this.nome.push(capNome);
     this.cpf.push(capCPF);
     this.email.push(capEmail);

    console.log(Pessoa);
  }
}

// var mNome = document.getElementById("mNome");
//     mNome.textContent = Pessoa.nome;
//     var text = mNome.textContent;
//
// console.log(Pessoa.nome);

var table = document.getElementsByTagName('table')[0];
var tbody = table.getElementByTagName("tbody")[0];

tbody.innerHTML="";

for(var i=0; i< nome.length; i++){
         tbody.innerHTML += "<tr><td>"+Pessoa.nome[i]+"</td></tr>";
}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);














  // Funções autoexecutaveis
  // (function Pessoa(nome,idade,sexo) {
  //   console.log('Nome => '+ nome+ '\n'+
  //               'Idade => '+ idade+ '\n'+
  //               'Sexo => '+ sexo+ '\n');
  // })('Matheus Wesley',22,'Masculino');


  // Criando objetos


  // var nome = prompt('Nome?');
  // var idade = prompt('Idade?');
  // var sexo = prompt('Sexo? (M) ou (F)');
  //
  // var pIdade = parseInt(idade);
  //
  // var pessoa = {
  //   nome: nome,
  //   idade: pIdade,
  //   sexo: sexo,
  //
  //   maiorIdade: function(i) {
  //     if (i > 18) {
  //       console.log('Olá ' + nome + ' você é maior de idade!');
  //     }else {
  //       console.log('Olá ' + nome + ' você ainda não atingiu a maior idade');
  //     }
  //   }
  //
  // };
  //
  // if (pessoa.sexo == 'M') {
  //   pessoa.sexo =  'MASCULINO';
  // }else {
  //   pessoa.sexo =  'FEMENINO';
  // }
  //
  // console.log(pessoa);
  // pessoa.maiorIdade(pIdade);


  // var p1 = [];
  // var p2 = [];
  //
  // p1.push('Aula');
  // p1.push('JavaScript');
  // console.log('Antes de juntar => ',p1.length);
  // console.log(p1);
  //
  // p2.push('Segundo');
  // p2.push('Array');
  //
  // result = p1.concat(p2);
  // console.log('Após juntar => ',p1.length);
  // console.log(result);
