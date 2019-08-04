pragma solidity >=0.4.21 <0.6.0;

import "./erc721.sol";

contract Goodnight is ERC721 {
  string public message;
  struct Room {
    uint256 whosTurnId;
    uint256 roomState;
  }  
  Room[] public rooms;
  uint256 myVariable;

  mapping (uint => address) public goodnightvalueToOwner;
  mapping (address => uint) ownerGoodnightCount;
  mapping (address => uint) lastSetGoodnightvalue;

  mapping (uint => address) goodnightApprovals;

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

    goodnightvalueToOwner[x] = msg.sender;
    ownerGoodnightCount[msg.sender]++;
    lastSetGoodnightvalue[msg.sender] = x;
  }

  function get() view public returns (uint _id, uint _state, string memory _message, uint _goodnightcount, address _lastsetvalueaccount, uint _lastValueset) {
    uint ownedGoodnightvalueCount = ownerGoodnightCount[msg.sender];
    address lastSetvalueAccount = goodnightvalueToOwner[rooms[rooms.length-1].whosTurnId];
    uint lastvaluOfGoodnightvalue = lastSetGoodnightvalue[lastSetvalueAccount];
    return (rooms[rooms.length-1].whosTurnId, rooms[rooms.length-1].roomState, message, ownedGoodnightvalueCount, lastSetvalueAccount, lastvaluOfGoodnightvalue);
  }

  function balanceOf(address _owner) public view returns (uint256 _balance) {
    //number of goodnightmessage owner has...
    return ownerGoodnightCount[_owner];
  }

  function ownerOf(uint256 _tokenId) public view returns (address _owner) {
    //owner address who has tokenId
    return goodnightvalueToOwner[_tokenId];
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerGoodnightCount[_to]++;
    ownerGoodnightCount[_from]--;
    goodnightvalueToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

  function transfer(address _to, uint256 _tokenId) public {
    _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint256 _tokenId) public {
    goodnightApprovals[_tokenId] = _to;
    emit Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint256 _tokenId) public {
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }

}
