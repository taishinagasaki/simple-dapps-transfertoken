pragma solidity >=0.4.21 <0.6.0;
contract Goodnight {
  string public message;
  contructor(string memory initMessage) public {
    message = initMessage;
  }
  function update(string memory newMessage) public {
    message = newMessage;
  }

}
