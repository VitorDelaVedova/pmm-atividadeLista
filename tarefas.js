var botaoAdicionar = document.getElementById('adicionar');
var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(event){
    if(event.key === 'Enter'){
        adicionar();
    }
};

botaoAdicionar.addEventListener('click', adicionar);

function adicionar(){
    var tarefa = inputTarefa.value;
    
    if(tarefa !== ''){
        var li = document.createElement('li');
        var p = document.createElement('p');
        p.innerText = tarefa;        

        var btnRemove = document.createElement('button');
        btnRemove.innerText = 'Remover';
        btnRemove.className = 'btnRemove';     
        
        // li.style.color = 'red';
        // li.onclick = function(){
        //     li.style.color = 'green';
        // }
        // li.ondblclick = function(){
        //     li.style.color = 'red';
        // }

        li.classList.add('para-fazer');
        li.onclick = function() {
            li.classList.remove('para-fazer');
            li.classList.add('concluida');    
        };

        btnRemove.onclick = function() {
            li.remove();
        }

        li.ondblclick = function() {
            li.classList.remove('concluida');
            li.classList.add('para-fazer');
        };

        var ol = document.getElementById('tarefas');
        li.appendChild(p);
        li.appendChild(btnRemove);
        ol.appendChild(li);        

        inputTarefa.value = '';
    }
}

