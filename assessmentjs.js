let totalNFTs = 0; 

function mintNFT(nftnum,name, description, owner) {
    const nft = { 
        nftnum: nftnum,
        name: name,
        description: description,
        owner: owner
    };
    totalNFTs++; 
    return nft;
}

function listNFTs(nftArray) {
    console.log("------------------------------------------------------------------------------------");
    for (let i = 0; i < nftArray.length; i++) {
        const nft = nftArray[i];
        console.log("NFT number  :  " + nft.nftnum);
        console.log("Name        :   " + nft.name);
        console.log("Description :   " + nft.description);
        console.log("Owner       :   " + nft.owner);
        console.log("------------------------------------------------------------------------------------");
    }
}

function getTotalSupply() {
    return totalNFTs;
}

const nft1 = mintNFT(" 1", "Bugatti", "German then French manufacturer of high-performance automobiles","Mate Rimac");
const nft2 = mintNFT(" 2", "Ferrari", "An Italian luxury sports car manufacturer based in Maranello, Italy","Benedetto Vigna");
const nft3 = mintNFT(" 3", "Tesla", "An automotive and energy company","Elon Musk");
const nft4 = mintNFT(" 4", "Rolls Royce", "Rolls-Royce is an everlasting expression of the exceptional","Tufan Erginbilgiç");

listNFTs([nft1, nft2, nft3, nft4]);

console.log("\nTotal number of NFTs created: " + getTotalSupply());
console.log("\n------------------------------------------------------------------------------------");
