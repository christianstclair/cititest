(function () {
  if (document.getElementById('exercise-section')) return;

  function mount() {
    const anchor = document.querySelector('.review-authorization-content');
    if (!anchor || document.getElementById('exercise-section')) return false;

    const section = document.createElement('section');
    section.id = 'exercise-section';
    section.classList.add('modal-dialog');
    section.innerHTML = `
        
        <div class="benefits-block" data-benefits="">
            <!-- Stacked benefits (up to 6) -->
            <div class="benefits-block__item">
                <img src="https://tpc.googlesyndication.com/simgad/11938213256650620670?" alt="" aria-hidden="true">
                <div class="benefits-block__body">
                    <h3 class="benefits-block__item--benefit-heading">New Accounts Save</h3>
                    <p>up to $100* on a qualifying purchase.</p>
                </div>
            </div>

            <div class="benefits-block__item">
                <img src="https://tpc.googlesyndication.com/simgad/6545472095436981282?" alt="" aria-hidden="true">
                <div class="benefits-block__body">
                    <h3 class="benefits-block__item--benefit-heading">Up to 24-Month Financingƚ</h3>
                    <p>during special promotions.</p>
                </div>
            </div>

        </div>
        <button type="button" id="exercise-learn-more">Learn More</button>
    `;

    anchor.insertAdjacentElement('afterend', section);

    const modal = document.createElement('div');
    modal.id = 'exercise-modal';
    modal.hidden = true;
    modal.innerHTML = `
        <link type="text/css" href="https://citiretailservices.citibankonline.com/apply/assets/css/desktop/partners/THD/partner.css" rel="stylesheet">
        
        <link type="text/css" href="https://citiretailservices.citibankonline.com/apply/assets/css/desktop/dmar/partners/THD/dmar-modal-disclosure.css" rel="stylesheet">

        
        <div class="exercise-modal__backdrop cui-popup-content__clickable-backdrop" data-close></div>
    
        <div class="exercise-modal__container">
            <!-- Modal Dialog -->
            <div class="exercise-modal__dialog modal-dialog" role="dialog" aria-modal="true" aria-labelledby="exercise-modal-title">

                <!-- Modal Offer -->
                <div class="modal-offer" id="wrap">
                    <!-- Top Part with Image -->
                    <div class="modal-offer__header" data-offer-header="">
                        <div class="offer-cardart" id="cardart-cont">
                            <picture>
                                <source media="(max-width: 589px)" srcset="https://tpc.googlesyndication.com/simgad/1209874604654071040?">
                                <img class="image-responsive" alt="" src="https://tpc.googlesyndication.com/simgad/2941365176230353297?">
                            </picture>
                        </div>
                        <div class="offer-header">
                            <h1 class="short-headline">CARD BENEFITS THAT WORK FOR YOU</h1>
                            <p class="modal-offer__subheader"></p>
                            <!-- BENEFITS HEADLINE TEXT -->
                            <p class="benefits-blocks__headline"></p>
                        </div>

                        <div class="hero-background" style="display: none;"></div>
                    </div>
                    
                    <!-- Begin Modal offer benefits -->
                    <div class="benefits-block" data-benefits="">
                        <!-- Stacked benefits (up to 6) -->
                        <div class="benefits-block__item">
                            <img src="https://tpc.googlesyndication.com/simgad/11938213256650620670?" alt="" aria-hidden="true">
                            <div class="benefits-block__body">
                                <h3 class="benefits-block__item--benefit-heading">New Accounts Save</h3>
                                <p>up to $100* on a qualifying purchase.</p>
                            </div>
                        </div>

                        <div class="benefits-block__item">
                            <img src="https://tpc.googlesyndication.com/simgad/13042084772101416819?" alt="" aria-hidden="true">
                            <div class="benefits-block__body">
                                <h3 class="benefits-block__item--benefit-heading">Special Financing Available</h3>
                                <p>everyday, in-store or online.</p>
                            </div>
                        </div>

                        <div class="benefits-block__item">
                            <img src="https://tpc.googlesyndication.com/simgad/6545472095436981282?" alt="" aria-hidden="true">
                            <div class="benefits-block__body">
                                <h3 class="benefits-block__item--benefit-heading">Up to 24-Month Financingƚ</h3>
                                <p>during special promotions.</p>
                            </div>
                        </div>
                        <div class="benefits-block__item">
                            <img src="https://tpc.googlesyndication.com/simgad/7475461090917042952?" alt="" aria-hidden="true">
                            <div class="benefits-block__body">
                                <h3 class="benefits-block__item--benefit-heading">Fraud Protection Guarantee</h3>
                                <p>$0 liability on unauthorized charges.</p>
                            </div>
                        </div>

                        <div class="benefits-block__item" style="display: none;">
                            <img src="" alt="" aria-hidden="true">
                            <div class="benefits-block__body">
                                <h3 class="benefits-block__item--benefit-heading"></h3>
                                <p></p>
                            </div>
                        </div>

                        <div class="benefits-block__item" style="display: none;">
                            <img src="" alt="" aria-hidden="true">
                            <div class="benefits-block__body">
                                <h3 class="benefits-block__item--benefit-heading"></h3>
                                <p></p>
                            </div>
                        </div>

                    </div>
                    <!-- .modal-offer__benefits -->
                    
                    <!-- BEGIN MULTI COLUMN BENEFITS -->
                    <div class="benefits-block-column" data-benefit-column="SHOW">

                        <div class="benefits-block-column__item" style="display: none;">
                            <img src="" alt="" aria-hidden="true">
                            <div class="benefits-block-column__body">
                                <p class="benefits-block-column__number"></p>
                                <p class="benefits-block-column__label"></p>
                                <p class="benefits-block-column__copy"></p>
                            </div>
                        </div>
                        <!--End of column benefits 1	-->

                        <div class="benefits-block-column__item" style="display: none;">
                            <img src="" alt="" aria-hidden="true">
                            <div class="benefits-block-column__body">
                                <p class="benefits-block-column__number"></p>
                                <p class="benefits-block-column__label"></p>
                                <p class="benefits-block-column__copy"></p>
                            </div>
                        </div>
                        <!--End of column benefits 2 -->

                        <div class="benefits-block-column__item" style="display: none;">
                            <img src="" alt="" aria-hidden="true">
                            <div class="benefits-block-column__body">
                                <p class="benefits-block-column__number"></p>
                                <p class="benefits-block-column__label"></p>
                                <p class="benefits-block-column__copy"></p>
                            </div>
                        </div>
                        <!--End of column benefits 3 -->

                        <div class="benefits-block-column__item" style="display: none;">
                            <img src="" alt="" aria-hidden="true">
                            <div class="benefits-block-column__body">
                                <p class="benefits-block-column__number"></p>
                                <p class="benefits-block-column__label"></p>
                                <p class="benefits-block-column__copy"></p>
                            </div>
                        </div>
                        <!--End of column benefits 4 -->

                    </div>
                    <!--/ End ofbenefits-block-column -->

                    <section class="benefits-summary">
                        <p></p>
                    </section>

                    <div class="modal-offer__image" style="display: none;">
                        <picture>
                            <source media="(max-width: 589px)" srcset="">
                            <img class="image-responsive" alt="" src="">
                        </picture>
                    </div>

                    <!-- Horizontal divider -->
                    <div class="divider" data-divider="SHOW">
                        <hr>
                    </div>

                    <!-- Offer disclosure -->
                    <div class="modoal-offer__disclosure">

                        <h3 class="modoal-offer__disclosure--tnc-heading">Offer Details</h3>
                        <p class="disclosure-one"><strong>Save Up to $100 Today* on a qualifying purchase when you open a new card. $25 off* your purchase of $25 up to $299 OR $50 off* your purchase of $300 up to $999 OR $100 off* your purchase of $1000 or more.</strong></p>
                        <p class="disclosure-one"><strong>*Offer is for new accounts and is subject to credit approval.</strong> This offer is redeemable for either a $25 discount on a single-receipt purchase of $25 up to $299, a $50 discount on a single-receipt purchase of $300 up to $999 or a $100 discount on a single-receipt purchase of $1,000 or more, excluding tax and delivery fees, within 30 days of your account open date at The Home Depot® retail stores or homedepot.com when made with your The Home Depot Consumer Credit Card, The Home Depot Home Improver Card, the Pro Xtra Credit Card, or The Home Depot Commercial Account. Coupon is on a single transaction and expires upon use. Valid in the U.S., U.S.V.I., Puerto Rico and Guam. Offer does not apply to prior purchases, The Home Depot Gift Cards or Certificates, third party gift cards, installation products or services purchased in home, non-discountable SKUs, Tool Rental or to Traeger®, Weber®, Bona®, Simplehuman®, Dacor®, Viking®, Fisher &amp; Paykel®, Sharp Insight™, De’Longhi®, Buckhaven, Lynx®, Alfresco™, OCI, Marvel®, Bertazzoni, Aga, Vent-A-Hood®, Samsung Chef Collection, Bosch Benchmark® Series, Liebherr, Zephyr, Miele, Signature Kitchen Suite, Jenn-Air®, Thermador®, JELD-WEN® Door Systems, or Monogram products and trade styles, and Blinds.com® purchases. Additional exclusions apply - see HomeDepot.com Terms of Use for details. Present to cashier at time of purchase or enter applicable online code during checkout to receive your discount. Coupon not valid on prior purchases and cannot be combined with any other discount or deferred financing, including the 6 months everyday offer. Void if sold, copied and where prohibited.</p>
                        <p class="disclosure-one"></p>
                        <p class="disclosure-one"></p>
                        <p class="disclosure-one"></p>
                        <div class="tila-disclosure">ƚWith credit approval for qualifying purchases made on The Home Depot Consumer Credit Card. APR: 29.99%. Minimum interest charge: $2. See card agreement for details including APR applicable to you. Offer is valid for consumer accounts in good standing; see store for details.</div>
                        <p class="disclosure-last"></p>
                        <p class="disclosure-last"> </p>
                        <p class="disclosure-last">  </p>
                        <p class="disclosure-last"></p>
                        <p class="disclosure-last"></p>
                        <p class="disclosure-last"></p>
                    </div>
                </div>
                <!--/ End of Modal Offer -->

                <!-- Close Button -->
                    <section class="close-modal" data-close><button tabindex="0" type="button" class="close-modal-icon" aria-label="Close."><cui-icon class="iconXBg"><!----><span role="figure" class="iconDisplayFlex ng-star-inserted" aria-label=""><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3657 11.2343C12.0533 10.9219 11.5468 10.9219 11.2344 11.2343C10.9219 11.5467 10.9219 12.0533 11.2344 12.3657L20.8687 22L11.2343 31.6343C10.9219 31.9468 10.9219 32.4533 11.2343 32.7657C11.5467 33.0781 12.0533 33.0781 12.3657 32.7657L22 23.1314L31.6344 32.7657C31.9468 33.0781 32.4533 33.0781 32.7658 32.7657C33.0782 32.4533 33.0782 31.9468 32.7658 31.6343L23.1314 22L32.7657 12.3657C33.0781 12.0533 33.0781 11.5467 32.7657 11.2343C32.4533 10.9219 31.9468 10.9219 31.6343 11.2343L22 20.8686L12.3657 11.2343Z" fill="#4D4D4D"></path></svg></span><!----><!----><!----><!----><!----><!----><!----></cui-icon></button></section>
                <!--/ End of Close Button -->
            </div>
            <!--/ End of Modal Dialog -->
        </div>
        <!--/.exercise-modal__container-->
    `;
    document.body.appendChild(modal);

    const open = () => {
      modal.hidden = false;
    };
    const close = () => {
      modal.hidden = true;
    };

    section
      .querySelector('#exercise-learn-more')
      .addEventListener('click', open);
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    return true;
  }

  if (mount()) return;

  const observer = new MutationObserver(() => {
    if (mount()) observer.disconnect();
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
