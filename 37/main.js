function make_tshirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Making ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it"));
}
//defult
make_tshirt();
make_tshirt("meduim");
make_tshirt("small", "Dive into coding"); //custom message
