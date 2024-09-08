function circunferencia(x){
  const pi = 3.141592
  return pi*x**2
}
const x = 5

resultado= circunferencia (x)
console.log (resultado)

function EIE(l1,l2,l3){
  if(l1==l2==l3)
    return ("é um equilatero")
  if(l1!=l2 && l1!=l3 && l2!=l3)
    return ("é escaleno")
  else 
    return ("é isoceles")
}

function tritri(l1,l2,l3) { 
  if(l1+l2>l3 && l1+l3>l2 && l2+l3>l1)
    return ("é um triangulo")
  else
    return ("não é um triangulo")
  } 

const a = 1
const b = 2
const c = 2

IAE= EIE(a,b,c)
triangulo= tritri(a,b,c)

function treta(triangulo, EIE){
  if( triangulo== "é um triangulo")
    return (triangulo + ' '+ EIE)
  else 
    return (triangulo)
}
terezinha=treta(triangulo, IAE)
console.log (terezinha)

const x1= 6
const x2= 9
const y1= 6
const y2= 10
const p= (x1, y1)
const q= (x2, y2)
function distancia (p, q){
  return Math.sqrt((x2-x1)**2+(y2-y1)**2)
}
Pdistancia= distancia(p,q)
console.log (Pdistancia)

const g= 8
const j= 8
const k= 2
function menorDeDois (a,b){
  if(a<=b)
    return a
  else
    return b
}
dois= menorDeDois (g,j)

function menorDeTres (dois,c){
  if(dois<=c)
    return dois
  else
    return c
}
tres= menorDeTres (dois,k)

console.log(tres)

function quadrado (a){
  return (a=a**2)
}
elevado= quadrado (k)
function quadrica (b){
  return (b=b**2)
}
quadro= quadrica (elevado)

console.log (quadro)

const verdade= true
const falso = false
function verdadeiro(a,b){
  return ((a||b)&&(a&&b))
}
verdadeAbsoluta = verdadeiro(verdade, verdade)
console.log (verdadeAbsoluta)