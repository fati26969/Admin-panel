const Dashboard=()=>{
    return `
    <section class="dashboard">
          <p class="title">داشبورد</p>
          <div class="part-1">
            <div class="right-chart">
              <div class="right-chart_top">
                <div class="rct-top">
                  <h3>کل فروش</h3>
                  <p>مشاهده گزارش</p>
                </div>
                <div class="rct-bot">
                  <h3>74,958,000 تومان</h3>
                  <p>7,395,000 تومان در ماه گذشته</p>
                </div>
              </div>
              <div class="right-chart_bottom">
                <div class="rcb-right">
                  <p>این هفته تاکنون</p>
                  <h3>1,339,000</h3>
                </div>
                <div class="rcb-left">
                  <p class="increase">4.63%</p><i class="fa-solid fa-arrow-up"></i>
                  <p>در مقایسه با هفته گذشته</p>
                </div>
              </div>
              <div class="right-chart_img">
                <img src="./images/chart1.png" alt="">
              </div>
            </div>
            <div class="left-chart">
              <h3>میانگین سفارش</h3>
              <div class="left-chart_mid">
                <span> تومان 463,000</span>
                <div>
                  <p class="increase">4.63%</p><i class="fa-solid fa-arrow-up"></i>
                  <p>در مقایسه با هفته گذشته</p>
                </div>
              </div>
              <div class="left-chart_img">
                <h3>سفارشات در طول زمان</h3>
                <img src="./images/chart2.png" alt="">
              </div>
            </div>
          </div>
          <div class="part-2">
            <p class="sub-title">سفارشات اخیر</p>
            <div class="orders1">
              <div class="grid-item">شماره سفارش</div>
              <div class="grid-item"> مشتری</div>
              <div class="grid-item">تاریخ</div>
              <div class="grid-item">مبلغ</div>
              <div class="grid-item">وضعیت</div>
              <div class="grid-item">#95954</div>
              <div class="grid-item">فرشید قنبری</div>
              <div class="grid-item">1402/02/21</div>
              <div class="grid-item">4,597,000</div>
              <div class="grid-item">پرداخت شده</div>
              <div class="grid-item">#95850</div>
              <div class="grid-item"> فریبا آتش افروز</div>
              <div class="grid-item">1402/02/02</div>
              <div class="grid-item">597,000</div>
              <div class="grid-item">لغو شده</div>
              <div class="grid-item">#95812</div>
              <div class="grid-item">دانیال سعیدی</div>
              <div class="grid-item">1402/01/02</div>
              <div class="grid-item">200,000</div>
              <div class="grid-item">پرداخت شده</div>
              <div class="grid-item">#95256</div>
              <div class="grid-item">مهدیه جباری</div>
              <div class="grid-item">1402/01/29</div>
              <div class="grid-item">1,100,000</div>
              <div class="grid-item">پرداخت شده</div>
              <div class="grid-item">#95135</div>
              <div class="grid-item">یاسمن چگینی</div>
              <div class="grid-item">1402/01/29</div>
              <div class="grid-item">1,100,000</div>
              <div class="grid-item">موعد مقرر</div>
            </div>
          </div>
          <div class="part-3">
            <div class="top-pro">
              <div class="top-pro-1">
                <p>محصولات برتر</p>
                <div><span>هفتگی</span><i class="fa-solid fa-angle-down"></i></div>
              </div>
              <div class="top-pro-2">
                <div class="pro">
                  <div class="pro-title">
                    <img src="./images/a.png" alt="">
                    <div>
                      <p>ردیاب تناسب اندام صورتی</p>
                      <span>990,000 تومان</span>
                    </div>
                  </div>
                  <div>
                    <p>990,000</p>
                    <span>10عدد فروخته شده </span>
                  </div>
                </div>
                <div class="pro">
                  <div class="pro-title">
                    <img src="./images/b.png" alt="">
                    <div>
                      <p>ساعت هوشمند بنفش</p>
                      <span>990,000 تومان</span>
                    </div>
                  </div>
                  <div>
                    <p>990,000</p>
                    <span>10عدد فروخته شده </span>
                  </div>
                </div>
                <div class="pro">
                  <div class="pro-title">
                    <img src="./images/c.png" alt="">
                    <div>
                      <p>ساعت هوشمند Mi Band مشکی</p>
                      <span>990,000 تومان</span>
                    </div>
                  </div>
                  <div>
                    <p>990,000</p>
                    <span>10عدد فروخته شده </span>
                  </div>
                </div>
                <div class="pro">
                  <div class="pro-title">
                    <img src="./images/d.png" alt="">
                    <div>
                      <p>هدفون مشکی</p>
                      <span>990,000 تومان</span>
                    </div>
                  </div>
                  <div>
                    <p>990,000</p>
                    <span>10عدد فروخته شده </span>
                  </div>
                </div>
                <div class="pro">
                  <div class="pro-title">
                    <img src="./images/e.png" alt="">
                    <div>
                      <p>هدفون آیفون 7</p>
                      <span>990,000 تومان</span>
                    </div>
                  </div>
                  <div>
                    <p>990,000</p>
                    <span>10عدد فروخته شده </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="traffic">
              <div class="traffic-title">
                <p>منابع ترافیک</p>
                <div><span>30 روز</span><i class="fa-solid fa-angle-down"></i></div>
              </div>
              <div class="traffic-body">
                <img src="./images/trafic.png" alt="">
                <ul class="traffic-list">
                  <li class="lists">
                    <div class="list">
                      <div class="list-dot"></div>
                      <span class="list-title">جستجوی ارگانیک</span>
                    </div>
                  </li>
                  <li class="lists">
                    <div class="list">
                      <div class="list-dot"></div>
                      <span class="list-title">ارجاعات</span>
                    </div>
                  </li>
                  <li class="lists">
                    <div class="list">
                      <div class="list-dot"></div>
                      <span class="list-title">شبکه های اجتماعی</span>
                    </div>
                  </li>
                  <li class="lists">
                    <div class="list">
                      <div class="list-dot"></div>
                      <span class="list-title">سایر</span>
                    </div>
                  </li>
                </ul>

                <div class="trafic-numbers">
                  <span>4,305</span>
                  <span>482</span>
                  <span>859</span>
                  <span>138</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    `
}
export default Dashboard