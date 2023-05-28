import React, { useContext, useState } from 'react';
import './StockTransactionManagement.css'; // Import the CSS file for additional styles
import axios from 'axios';
import TokenContext from '../../../Context/TokenContext';
import { async } from 'q';

export const StockTransactionManagement = () => {
    const [selectedButton, setSelectedButton] = useState('Add'); // Initial selection is 'Add'
    const [InputBox0, setInputBox0] = useState('');

    const [InputBox1, setInputBox1] = useState('');
    const [InputBox2, setInputBox2] = useState('');
    const [InputBox3, setInputBox3] = useState('');
    const [InputBox4, setInputBox4] = useState('');
    const [InputBox5, setInputBox5] = useState('');

    const Token = useContext(TokenContext);
    let retreiveValue = [{}];


    const handleReset = () => {
        setInputBox1('');
        setInputBox2('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
    };

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setInputBox1('');
        setInputBox2('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
    };


    // Function to handle input change
    const handleInputChange0 = (event) => {
        setInputBox0(event.target.value);
    };


    const handleInputChange1 = (event) => {
        setInputBox1(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setInputBox2(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setInputBox3(event.target.value);
    };
    const handleInputChange4 = (event) => {
        setInputBox4(event.target.value);
    };
    const handleInputChange5 = (event) => {
        setInputBox5(event.target.value);
    };

    const BrokerExist = async (b) => {
        try {
            const response = await axios.get(`https://www.tradekub.me/broker/${b}`, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            });

            console.log(response.data);
            return 1; // Resolving the Promise with the desired value
        } catch (error) {
            console.error(error);
            return 0; // Resolving the Promise with the desired value
        }
    };

    const UserExist = async (u) => {
        try {
            const response = await axios.get(`https://www.tradekub.me/users/username/${u}`, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            });
            console.log(response.data);
            return 1; // Resolving the Promise with the desired value
        } catch (error) {
            console.error(error);
            return 0; // Resolving the Promise with the desired value
        }
    };

    const Get_user_data = async (u) => {
        await axios
          .get(`https://www.tradekub.me/users/username/${u}`, {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + Token.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            retreiveValue = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      };

    const Get_account_data = async (a) => {
        await axios
          .get(`https://www.tradekub.me/account/${a}`, {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + Token.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            retreiveValue = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      };


    const AccountExist = async (b) => {
        try {
            const response = await axios.get(`https://www.tradekub.me/account/${b}`, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            });

             console.log(response);
            return 1; // Resolving the Promise with the desired value
        } catch (error) {
            console.error(error);
            return 0; // Resolving the Promise with the desired value
        }
    };


    const CreateAccount = async ({ InputBox0, InputBox2, InputBox3 }) => {
        const data = {
            user_id: Number(retreiveValue.id),
            broker_id: Number(InputBox0),
            cash_balance: 0,
            line_available: 0,
            credit_limit:  Number(InputBox3),
            pin: Number(InputBox2)
        };

        await axios
            .post("https://www.tradekub.me/account/", data, {
                headers: {
                    accep: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            })
            .then((response) => {
                console.log(response);
                alert("Create account successfull");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error.data);
                alert("Create account failed please try again");
            });
    };

    
     const handleSubmit2 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
        if(InputBox0 (broker ID)ไม่เจอใน databases)
        {
            alert('Cannot find your broker ID')
            window.location.reload();

        }
        else if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the account ID')
            window.location.reload();
        }
        else if(InputBox1(accountID) มี แต่ account_id ไม่ตรงกับ InputBox0 (your broker ID))
        {
            alert('the account isn't belong to your broker ID')
            window.location.reload();
        }
        else if(InputBox2 (order ID) หาไม่เจอ || InputBox2 ได้ cancel หรือ match ไปแล้ว)
        {
            alert('Invalid order ID (no existing or has been ended)')
            window.location.reload();
        }
        else {
         //เตรียมยัดข้อมูลตรงนี้
         /*InputBox1 //account Id ที่ต้องการอัพเดท
         InputBox2 //order ID
         InputBox3 //Volume
         InputBox4 //price
        //******************** Edit*/
        window.location.reload();
    };

 


    return (
        <div>
            <h className='ManagementHeader4'>Stock Transaction</h>
 

 
            <div>
                <form onSubmit={handleSubmit2}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Exsiting account ID..."
                        className='box_1_forSearch'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="Existing order ID..."
                        className='box_2_input'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="Volume..."
                        className='box_3_input'
                    />
                    <input
                        type="text"
                        value={InputBox4}
                        onChange={handleInputChange4}
                        placeholder="Unit price..."
                        className='box_4_input'
                    />

                    <button type="submit" className='submitTransaction'>Update</button>
                </form>
                <button className='resetTransaction' onClick={handleReset}>Reset</button>
                </div>

            <input
                type="text"
                value={InputBox0}
                onChange={handleInputChange0}
                placeholder="Your broker ID..."
                className='brokerBox'
            />

        </div>
    );
};

export default StockTransactionManagement;