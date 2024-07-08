

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcryp.hash(password, saltRounds);
    console.log(`Hashed password: ${hashedPassword}`);
};

hashPassword('adminpassword'); // Replace 'adminpassword' with your desired password
