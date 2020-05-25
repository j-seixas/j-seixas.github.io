<template>

   <div class="main"> 
            
        <div class="leftBar">
            <div class="profileImage">
                <img src="images/profilePic.jpg" class="rounded mx-auto d-block" alt="">
            </div>
            <div> 
                <h3>João Seixas</h3>

            </div>
        </div>

        <div class="mainContent">
            <h1> Work in progress...</h1>
            <br>
            <br>
            <h1>João <b>Seixas</b></h1>
            <p>Student in Faculty of Engineering, University of Porto in Portugal <img src="https://img.icons8.com/offices/30/000000/portugal.png">.</p>
            <p>Taking BSc (3 years) + MSc (2 years) in Informatics and Computer Engineering (currently on the 5th and last year).</p>
            <p>Currently @ Kraków on ERASMUS+.</p> 
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
  }
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    font-family: 'Fira Code', monospace;
}

.leftBar {
    flex: 1;
    
}

.profileImage {
    margin: 5%;
    margin-top: 10%;
}

.profileImage img {
    max-width: 85%;
    border-radius: 50% !important;
    -webkit-border-radius: 50% !important;
    -moz-border-radius: 50% !important;
}

.mainContent {
    flex: 3;
    padding: 5%;
    background-color: #EFEFEF;
}
</style>