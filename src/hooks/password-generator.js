/* eslint-disable default-case */
import {
    useState
} from "react";


const usePasswordGenerator = () => {

    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generatePassword = (checkBoxData, length) => {


        let charset = "",
            generatedPassword = "";

        const selectedOption = checkBoxData.filter((checkbox) => checkbox.state);

        if (selectedOption.length === 0) {
            setErrorMessage("Nothing selected please select an option")
            setPassword("");
            return;
        }

        selectedOption.forEach((option) => {
            switch (option.title) {
                case "Include Upper Case Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;

                case "Include Lower Case Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;

                case "Include Numbers":
                    charset += "0123456789";
                    break;

                case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;

                default:
                    break;
            }
        });


        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }

        setPassword(generatedPassword);
        setErrorMessage("")

        if (length <= 4) {
            document.querySelector(".bar:nth-child(2)").style.backgroundColor = "#e91010";
            document.querySelector(".bar:nth-child(3)").style.backgroundColor = "transparent";
            document.querySelector(".bar:nth-child(4)").style.backgroundColor = "transparent";
            document.querySelector(".bar:nth-child(5)").style.backgroundColor = "transparent";
            document.getElementById("strength").innerHTML = "Poor";
        } else if (length <= 8) {
            document.querySelector(".bar:nth-child(2)").style.backgroundColor = "#f37704";
            document.querySelector(".bar:nth-child(3)").style.backgroundColor = "#f37704";
            document.querySelector(".bar:nth-child(4)").style.backgroundColor = "#f37704";
            document.querySelector(".bar:nth-child(5)").style.backgroundColor = "transparent";
            document.getElementById("strength").innerHTML = "Medium";

        } else if (length <= 12) {
            document.querySelector(".bar:nth-child(2)").style.backgroundColor = "#A3FFAC";
            document.querySelector(".bar:nth-child(3)").style.backgroundColor = "#A3FFAC";
            document.querySelector(".bar:nth-child(4)").style.backgroundColor = "#A3FFAC";
            document.querySelector(".bar:nth-child(5)").style.backgroundColor = "#A3FFAC";
            document.getElementById("strength").innerHTML = "Excellent";

        }
    };





    return {
        password,
        errorMessage,
        generatePassword
    };

};

export default usePasswordGenerator;