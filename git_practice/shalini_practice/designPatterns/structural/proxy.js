const org = {
    method(){
        console.log("i'm form original obj");
    }
}

const proxy = {
    method(){
        console.log("shield");
        org.method();
    }
}

proxy.method();