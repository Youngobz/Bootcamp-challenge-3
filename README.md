# Bootcamp-challenge-3

In this section, I will provide an overview of the modifications made to the JavaScript code in order to meet the requirements of the acceptance criteria. The provided starter code was enhanced to incorporate functionality that allows users to generate random passwords based on their selected criteria.

If you want to check out the website, you can visit this URL:  https://youngobz.github.io/Bootcamp-challenge-3/

Throughout the modification process, a focus was placed on adhering to best practices and implementing efficient JavaScript techniques. By following coding conventions and employing logical structures, the code was optimized for readability and maintainability. This ensures that both regular users and developers who may need to review or modify the code can easily understand its functionality.

To achieve the requirements of the acceptance criteria, several modifications were made to the provided starter code.

The code was enhanced to include global variables that store the necessary arrays and user choices. These variables include characterLength to hold the desired password length, choiceArray to store the selected character types, and arrays like specialCharacterArray, lowerCaseArray, upperCaseArray, and numberArray to store the respective character options.

To prompt the user for password criteria, the getPromptsFromUser() function was created. It asks the user for the desired password length, and if the input is valid (between 8 and 128 characters), the function proceeds to ask additional prompts for each character type (lowercase, uppercase, special characters, and numbers). If the user confirms a character type, the corresponding array is added to the choiceArray.

The generatePassword() function generates the password based on the selected criteria. It utilizes a for loop to iterate over the desired characterLength and randomly selects characters from the choiceArray. These characters are concatenated to form the final password.

To execute the prompts and generate the password, the writePassword() function is responsible. It calls the getPromptsFromUser() function to validate and store the user choices. If the prompts are successfully verified, the generatePassword() function is called to generate the password, which is then displayed in the designated password field.

Finally, an event listener is added to the "Generate Password" button (generateBtn). When the button is clicked, it triggers the writePassword() function, which prompts the user for criteria and generates the password accordingly.

Furthermore, the code was designed to be user-friendly and accessible. Error handling was implemented to validate user input and provide clear instructions in case of invalid entries. The prompts presented to the user were carefully crafted to guide them through the process of selecting password criteria, ensuring a smooth user experience.

By making these adaptations, the JavaScript code successfully meets the requirements of the acceptance criteria, allowing users to generate strong and secure passwords that meet their desired criteria. The code's efficiency, readability, and adherence to best practices contribute to a reliable and user-friendly password generation feature.