---
layout: "../../layouts/BlogLayout.astro"
title: "Creating a Source of Truth Like Wikipedia Using Rust and Blockchain to Combat Fake News"
description: ""
tags: ["code", "BlockChain"]
time: 4
featured: true
timestamp: "2024-09-12T12:20:32-0300"
filename: "2024-09-12_Creating-a-Source-of-Truth-Like-Wikipedia-Using-Rust-and-Blockchain-to-Combat-Fake-News-aa489fdd6188"
---

Creating a Source of Truth Like Wikipedia Using Rust and Blockchain to Combat Fake News
=======================================================================================

In the information age, fake news and misinformation have become growing issues. In response, there is a need for a source of truth that…

* * *

### Creating a Source of Truth Like Wikipedia Using Rust and Blockchain to Combat Fake News

![](https://cdn-images-1.medium.com/max/800/1*vsnuwlnd3b5Iv2RKY6ltJw.png)

In the information age, fake news and misinformation have become growing issues. In response, there is a need for a **source of truth** that ensures the accuracy of information and can be audited transparently. Using emerging technologies such as **blockchain** and the **Rust programming language**, it’s possible to create a robust and reliable platform similar to Wikipedia, where data can be verified and maintained in a decentralized manner. This article discusses how to build such a solution from a software engineering perspective.

![](https://cdn-images-1.medium.com/max/800/1*RYHSglNn19VLFO8ecoq1MQ.jpeg)

### Why Rust and Blockchain?

### Rust: Safety and Performance

Rust is known for its **memory safety** and high performance, making it an excellent choice for systems where **data integrity** and **concurrency** are critical. These characteristics are essential in a blockchain project, as we need to ensure that the information stored is not corruptible or manipulable.

### Blockchain: Transparency and Decentralization

Blockchain allows the creation of a distributed and immutable database. Each node in the network has a copy of the information, and any modification must be approved through a consensus mechanism, making it difficult to tamper with the data. This makes blockchain ideal for a platform aiming to combat misinformation, as any changes to the information will be transparent and verifiable.

### System Architecture Design

1.  **Frontend**: A Wikipedia-like interface where users can read articles and propose changes or new entries.
2.  **Backend in Rust**: A system that handles user requests and blockchain transactions.
3.  **Blockchain**: Stores data immutably, allowing traceability of any modification. Each article on the platform will be associated with a block.
4.  **Digital Signatures and Verification**: Information sources will be verified through digital signatures and cryptography to ensure that data comes from trusted sources.

### Building the Backend in Rust

### 1\. Project Initialization

First, we set up a Rust project using **Cargo**, the Rust package manager. We install the necessary dependencies to handle cryptography and blockchain.

cargo new source\_of\_truth  
cd source\_of\_truth

In the `Cargo.toml` file, we add the required dependencies:

toml  
\[dependencies\]  
serde = { version = "1.0", features = \["derive"\] }  
serde\_json = "1.0"  
sha2 = "0.9"  \# For hash functions  
ring = "0.16" \# For cryptograph

### 2\. Creating a Block Structure

Each article or change will be represented by a block in the blockchain. We define a block structure that contains the article information, source, and the hash of the previous block:

extern crate sha2;  
extern crate serde;  
extern crate serde\_json;  
use sha2::{Sha256, Digest};  
use serde::{Serialize, Deserialize};  
use std::time::{SystemTime, UNIX\_EPOCH};  
#\[derive(Serialize, Deserialize, Debug, Clone)\]  
struct Block {  
    index: u64,  
    timestamp: u128,  
    article: String,  
    source: String,  
    prev\_hash: String,  
    hash: String,  
}  
impl Block {  
    fn new(index: u64, article: String, source: String, prev\_hash: String) \-> Block {  
        let timestamp = SystemTime::now()  
            .duration\_since(UNIX\_EPOCH)  
            .expect("Time went backwards")  
            .as\_millis();  
        let block\_data = format!("{}{}{}{}", index, timestamp, &article, &source);  
        let hash = calculate\_hash(&block\_data);  
        Block {  
            index,  
            timestamp,  
            article,  
            source,  
            prev\_hash,  
            hash,  
        }  
    }  
}  
fn calculate\_hash(data: &str) \-> String {  
    let mut hasher = Sha256::new();  
    hasher.update(data.as\_bytes());  
    let result = hasher.finalize();  
    format!("{:x}", result)  
}

### 3\. Implementing the Blockchain

Now, we implement the blockchain, where each new block depends on the hash of the previous block, ensuring immutability.

struct Blockchain {  
    chain: Vec<Block>,  
}  
impl Blockchain {  
    fn new() \-> Blockchain {  
        Blockchain {  
            chain: vec!\[Blockchain::create\_genesis\_block()\],  
        }  
    }  
    fn create\_genesis\_block() \-> Block {  
        Block::new(0, String::from("Genesis Block"), String::from("N/A"), String::from("0"))  
    }  
    fn add\_block(&mut self, article: String, source: String) {  
        let prev\_block = &self.chain\[self.chain.len() - 1\];  
        let new\_block = Block::new(  
            self.chain.len() as u64,  
            article,  
            source,  
            prev\_block.hash.clone(),  
        );  
        self.chain.push(new\_block);  
    }  
    fn is\_valid(&self) \-> bool {  
        for i in 1..self.chain.len() {  
            let current = &self.chain\[i\];  
            let previous = &self.chain\[i - 1\];  
            if current.prev\_hash != previous.hash {  
                return false;  
            }  
            let recalculated\_hash = calculate\_hash(&format!(  
                "{}{}{}{}",  
                current.index, current.timestamp, current.article, current.source  
            ));  
            if current.hash != recalculated\_hash {  
                return false;  
            }  
        }  
        true  
    }  
}

With this basic blockchain implementation, we can add articles as blocks and ensure the chain’s validity by checking the previous hashes.

### 4\. Verifying with Digital Signatures

To verify the sources of information, we use **digital signatures**. Each trusted source (e.g., a media outlet or a verified journalist) will have a **private key** to sign the information they publish.

#### Generating Keys

We use the `ring` library to generate key pairs and sign data:

extern crate ring;  
use ring::{rand, signature};  
fn generate\_keys() \-> (Vec<u8\>, Vec<u8\>) {  
    let rng = rand::SystemRandom::new();  
    let key\_pair = signature::Ed25519KeyPair::generate\_pkcs8(&rng).unwrap();  
    let key\_pair = signature::Ed25519KeyPair::from\_pkcs8(key\_pair.as\_ref()).unwrap();  
    (key\_pair.public\_key().as\_ref().to\_vec(), key\_pair.private\_key().as\_ref().to\_vec())  
}  
fn sign\_data(data: &\[u8\], private\_key: &\[u8\]) \-> Vec<u8\> {  
    let key\_pair = signature::Ed25519KeyPair::from\_pkcs8(private\_key).unwrap();  
    key\_pair.sign(data).as\_ref().to\_vec()  
}  
fn verify\_signature(data: &\[u8\], public\_key: &\[u8\], signature: &\[u8\]) \-> bool {  
    let peer\_public\_key = signature::UnparsedPublicKey::new(&signature::ED25519, public\_key);  
    peer\_public\_key.verify(data, signature).is\_ok()  
}

### 5\. Integrating the Signature into the Block

Now we can modify our block structure to include digital signatures and verify that the sources are legitimate.

#\[derive(Serialize, Deserialize, Debug, Clone)\]  
struct Block {  
    index: u64,  
    timestamp: u128,  
    article: String,  
    source: String,  
    prev\_hash: String,  
    hash: String,  
    signature: Vec<u8\>,  
}  
impl Block {  
    fn new(index: u64, article: String, source: String, prev\_hash: String, private\_key: &\[u8\]) \-> Block {  
        let timestamp = SystemTime::now()  
            .duration\_since(UNIX\_EPOCH)  
            .expect("Time went backwards")  
            .as\_millis();  
        let block\_data = format!("{}{}{}{}", index, timestamp, &article, &source);  
        let hash = calculate\_hash(&block\_data);  
        let signature = sign\_data(block\_data.as\_bytes(), private\_key);  
        Block {  
            index,  
            timestamp,  
            article,  
            source,  
            prev\_hash,  
            hash,  
            signature,  
        }  
    }  
}

Now, every time an article is added, the source signs the block digitally, and readers can verify the authenticity of the source using its public key.

### Conclusion

Using **Rust** and **blockchain**, we have designed a platform that could function as a source of truth, where data is transparent and verifiable. Through digital signatures, we ensure that the sources are trustworthy and that any published information can be audited.

This approach has great potential for combating fake news by allowing users and auditors to trust that the information has not been altered. The decentralization provided by blockchain ensures that the platform is not controlled by a single entity, reducing the chances of manipulation.

Would you like to try this approach in a real-world project? **Rust** and **blockchain** offer the tools to create a future with more reliable information!

By [Jaime Hernández](https://medium.com/@devjaime) on [September 12, 2024](https://medium.com/p/aa489fdd6188).

[Canonical link](https://medium.com/@devjaime/creating-a-source-of-truth-like-wikipedia-using-rust-and-blockchain-to-combat-fake-news-aa489fdd6188)

Exported from [Medium](https://medium.com) on March 15, 2025.