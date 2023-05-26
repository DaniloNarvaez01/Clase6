function operaciones(){
    let num1, num2
    num1 = parseInt(document.getElementById('numero1').value)
    num2 = parseInt(document.getElementById('numero2').value)

    sum = num1 + num2
    res = num1 - num2
    mul = num1 * num2
    div = num1 / num2

    alert("La suma es " + sum + "\n La resta es " + res + "\n La multiplicacion es" + mul )

    if(num2==0)
    alert("La division no se puede hacer")
    else
    alert("la division es " + div)

}