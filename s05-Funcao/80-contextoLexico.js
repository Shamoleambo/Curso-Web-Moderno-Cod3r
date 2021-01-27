const valor = "Global";

function fun1() {
    console.log(valor);
}

function fun2() {
    const valor = "Local";
    fun1();
}

fun2();