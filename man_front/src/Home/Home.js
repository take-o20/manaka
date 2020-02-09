import React from 'react'
import './Home.css'

export default function Home(props) {
  return (
    <div>
    <div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  <div className='sidebarIconPlace'>
    <label for="openSidebarMenu" className="sidebarIconToggle">
      <div className="spinner diagonal part-1"></div>
      <div className="spinner horizontal"></div>
      <div className="spinner diagonal part-2"></div>
    </label>
  </div>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      <li>Manaka <span>Web Developer</span></li>
      <li><a href="#">Home</a></li>
      <li><a href="#services" >Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="login">Login</a></li>
      <li><a href="signup">SignUp</a></li>
    </ul>
  </div>
  </div>
      <div id="i4kkf"></div>
        <header class="masthead d-flex">
          <div id="i4l29" class="container text-center my-auto">
            <h1 class="mb-1">Hello World</h1>
            <a href="/signup" class="btn btn-primary btn-xl js-scroll-trigger">今すぐ登録</a>
            <h3 class="mb-5"><em id="i6le3">chat and meet</em></h3>
          </div>
          <div class="overlay"></div>
        </header>
        <section id="about" class="content-section bg-light">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <h2 id="iq4ah">会員数1000人以上！</h2>
                <p class="lead mb-5">男性、女性、どちらの会員も充実しているのでマッチングに手間がかかりません！あなたの好みにあわせて素敵なパートナーをご紹介します！</p>
                  <a href="#services" class="btn btn-dark btn-xl js-scroll-trigger">Button</a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" class="content-section text-white text-center">
          <div class="container">
            <div class="content-section-heading">
              <h2 class="mb-5" style={{color: "white"}}>他サービスとは異なり、本マッチングサイトでは機能がこんなにもりだくさん！</h2>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-screen-smartphone"></i>
                </span>
                <h4 style={{color: "white"}}><strong id="i8j8d">なんか</strong></h4>
                <p class="text-faded mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-pencil"></i>
                </span>
                <h4 style={{color: "white"}}><strong id="ic1ia">やばい</strong></h4>
                <p class="text-faded mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-like"></i>
                </span>
                <h4 style={{color: "white"}}><strong id="it5td"><span draggable="false" data-highlightable="1" id="ic1ia-2" class="gjs-comp-selected">えもい</span><br/></strong></h4>
                <p class="text-faded mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-mustache"></i>
                </span>
                <h4 style={{color: "white"}}
                ><strong id="iq9dl"><span draggable="false" data-highlightable="1" id="ic1ia-3" class="gjs-comp-selected">じわる</span><br/></strong></h4>
                <p class="text-faded mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </div>
        </section>
        <section class="callout">
          <div class="container text-center">
            <h2 class="mx-auto mb-5">登録してさっそくマッチングしてみましょう！</h2>
            <a href="#" class="btn btn-primary btn-xl">Button</a>
          </div>
        </section>
        <section id="portfolio" class="content-section">
          <div class="container">
            <div class="content-section-heading text-center">
              <h2 class="mb-5">おしらせ</h2>
            </div>
            <div class="row no-gutters">
              <div class="col-lg-6">
                <a href="#" class="portfolio-item">
                  <span class="caption">
                    <span class="caption-content">
                      <h2 id="i00f3">なだー</h2>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </span>
                  </span>
                  <img src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="img-fluid"/>
                </a>
              </div>
              <div class="col-lg-6">
                <a href="#" class="portfolio-item">
                  <span class="caption">
                    <span class="caption-content">
                      <h2 id="imyhs">じゃみりあ</h2>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </span>
                  </span>
                  <img src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="" class="img-fluid"/>
                </a>
              </div>
              <div class="col-lg-6">
                <a href="#" class="portfolio-item">
                  <span class="caption">
                    <span class="caption-content">
                      <h2 id="ifci14">あいいーしゃ</h2>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </span>
                  </span>
                  <img src="https://images.unsplash.com/photo-1514564079764-600734e1e9b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" alt="" class="img-fluid"/>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="content-section text-white">
          <div class="container text-center"><h2 class="mb-4" style={{color: "white"}}>本サービスの開発者のプロフィールが閲覧できます！ぜひご覧ください！</h2>
            <a href="#" class="btn btn-xl btn-light mr-4">Button 1</a>
            <a href="#" class="btn btn-xl btn-dark">Button 2</a>
          </div>
        </section>
        <footer class="footer text-center">
          <div class="container">
            <ul class="list-inline mb-5">
              <li class="list-inline-item">
                <a href="#" class="social-link rounded-circle text-white mr-3">
                  <i class="icon-social-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link rounded-circle text-white mr-3">
                  <i class="icon-social-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link rounded-circle text-white">
                  <i class="icon-social-github"></i>
                </a>
              </li>
            </ul>
            <p class="text-muted small mb-0">© 2020 Author All Right Reserved</p>
          </div>
        </footer>
        <a href="#page-top" class="scroll-to-top rounded js-scroll-trigger">
          <i class="fas fa-angle-up"></i>
        </a>
    </div>
   )
}