pragma solidity >=0.4.21 <0.6.0;
contract Goodnight {
  string public message;
  struct Room {
    uint256 whosTurnId;
    uint256 roomState;
  }  
  Room[] public rooms;
  uint256 myVariable;

  constructor(string memory initMessage) public {
    message = initMessage;
  }
  function update(string memory newMessage) public {
    message = newMessage;
  }

  function set(uint256 x) public {
    myVariable = uint256(x);
    Room memory room = Room(uint256(x), uint256(x+1));   
    rooms.push(room);
  }

  function get() view public returns (uint _id, uint _state, string memory _message) {
    return (rooms[rooms.length-1].whosTurnId, rooms[rooms.length-1].roomState, message);
  }
}
