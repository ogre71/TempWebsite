function toggleLangSelect() {
    var popup = document.getElementById('langSelect');
    if (popup.style.visibility === 'hidden' || popup.style.visibility === '') {
        popup.style.visibility = 'visible';
    } else {
        popup.style.visibility = 'hidden';
    }
}

function loadNav(caller) {
    /* NAV BAR */
    content = `
<div><img src="../img/academeialogo.png">
<a href="home.html">Home</a>
<a href="about.html">About</a>
<a href="stuff.html">Stuff</a>
<a href="other.html">Other</a>

<div>
    <a href="account.html">Sign in</a>
    <a href="store.html">Store</a>
    <div><a onclick="toggleLangSelect('')"><img src="../img/languageicon.png"></a></div>
</div></div><br><br><hr>`;
    document.getElementById("nav").innerHTML = content;
    
    /* Language selector */
    content = `
Select Your Language<br>
<a href="../eng/`+caller+`.html">● English 🇺🇸</a><br>
<a href="../deu/`+caller+`.html">● Deutsch 🇩🇪</a><br>
<a href="../tok/`+caller+`.html">● toki pona <img style="height: 18px" src="../img/toki_pona.png"></a>`;
    document.getElementById("langSelect").innerHTML = content;

}