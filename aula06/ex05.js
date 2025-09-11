// Exemplo com array utilizando o slice para fatiar o array
nomes= ['Daniel','Bruna','Camila','Julia'];
console.log(nomes);
nomes.splice(1,1,'Viviane'); // Splice remove um elemento da posição 1,1 e adiciona outro elemento na mesma posiçao
console.log(nomes);
const nomes2 =nomes.slice(1,3) ; // Fatia a lista da posição 1 a 2
console.log(nomes2);
const tamanho = nomes.length; // Pega o tamanho da lista
console.log(tamanho);
console.log("Print foreach");
// ForEach  itera os elementos da lista
nomes.forEach(function(nomes,index)  {
    console.log(index,nomes);
    
});

// for
console.log('Print com for');
for(i=0;i<nomes.length;i++){
    console.log(`${i} ${nomes}`)
}