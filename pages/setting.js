const Setting=()=>{
    return`
    <section class="setting">
          <p class="title">تنظیمات</p>
          <div class="setting-body">
            <h4>تنظیمات فروشگاه اینترنتی</h4>
            <p>در اینجا تنظیمات پایه فروشگاه برای وب سایت شما آمده است.</p>
            <form action="">
              <div class="form-group">
                <div class="group-right">
                  <label for="" class="form-label">نام فروشگاه</label>
                  <p class="form-note">نام وب سایت خود را مشخص کنید</p>
                </div>
                <div class="group-left">
                  <input class="form-text" type="text" value="فروشگاه من">
                </div>
              </div>
              <div class="form-group">
                <div class="group-right">
                  <label for="" class="form-label">ایمیل وب سایت</label>
                  <p class="form-note">نشانی ایمیل وب سایت خود را مشخص کنید.</p>
                </div>
                <div class="group-left">
                  <input class="form-text" type="email" value="your@email.com">
                </div>
              </div>
              <div class="form-group">
                <div class="group-right">
                  <label for="" class="form-label">کپی رایت وب سایت</label>
                  <p class="form-note">اطلاعات کپی رایت وب سایت شما.</p>
                </div>
                <div class="group-left">
                  <input class="form-text" type="text" value="تمام حقوق محفوظ است.">
                </div>
              </div>
              <div class="form-group">
                <div class="group-right">
                  <label for="" class="form-label">مجوز ثبت نام</label>
                  <p class="form-note">فعال یا غیرفعال کردن ثبت نام در وب سایت</p>
                </div>
                <div class="group-left">
                  <input class="form-radio" type="radio">
                  <label for="">فعال</label>
                  <input class="form-radio" type="radio">
                  <label for="">غیرفعال</label>
                  <input class="form-radio" type="radio">
                  <label for="">در صورت درخواست</label>
                </div>
              </div>
              <div class="form-group">
                <div class="group-right">
                  <label for="" class="form-label">وب سایت اصلی</label>
                  <p class="form-note">اگر وب سایت اصلی شما خارجی است، نشانی اینترنتی را مشخص کنید.</p>
                </div>
                <div class="group-left">
                  <input class="form-text" type="url" value="https://www.yourwebsite.com">
                </div>
              </div>
              <div class="form-group">
                <div class="group-right">
                  <label for="" class="form-label">حالت تعمیر</label>
                  <p class="form-note">برای آفلاین کردن وب سایت فعال کنید.</p>
                </div>
                <div class="group-left">
                  <label for="">آفلاین</label>
                  <input type="checkbox">
                </div>
              </div>
              <div class="form-submit">
                <button class="submit" type="submit">به روز رسانی</button>
              </div>
            </form>
          </div>
        </section>
    `
}
export default Setting