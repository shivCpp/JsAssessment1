/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ( name, videoGameType, musicType, bookType) {
    const NFT1={
        name: name,
        videoGameType: videoGameType,
        musicType: musicType,
        bookType: bookType
    }
    NFTs.push(NFT1);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    let nftSize=NFTs.length;
    for(let i=0; i<nftSize ; i++ )
        {
            const nft = NFTs[i];
        console.log("\nName: " + nft.name);
        console.log("Video Game Type: " + nft.videoGameType);
        console.log("Music Type: " + nft.musicType);
        console.log("Book Type: " + nft.bookType);
        }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    let nftSize=NFTs.length;
        console.log("Total number of minted NFTs:  "  + nftSize);
}

// call your functions below this line
mintNFT ( "john"  , "Adventure" , "Rock", "Fantasy " );
mintNFT ( "Robert", " Fighting" , "Blues", " Fiction");
mintNFT ( "Sarah" , " survival ", "Funk", "History" );
mintNFT ( "Emily ", " Multiplayer ", "Folk", " Thriller " );
listNFTs ();
getTotalSupply();
