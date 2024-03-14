function make_tshirt(size:string="Large",
message:string="I love Typescript") {
    console.log(`Making ${size} t-shirt with the message "${message}" printed on it`);
}
//defult
make_tshirt();
make_tshirt("meduim");
make_tshirt("small", "Dive into coding");//custom message
