

<!-- for selection modal -->
<div class="addEnquiry productSelection_modal">
    <form action="#">
        <div class="modal fade" id="createformModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header modalheader_customStyle">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <div class="modaltitle_icon">
                               <img src="{{asset('assets/img/newimages/add-to-basket.png')}}" alt="">
                            </div>
                            <div class="enquiryChoose_Title">
                                Create a New Product
                                <span class="modalTitlePara">
                                    Select the type of product you want to add.
                                </span>
                            </div>
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="selectedtype_container">
                            <!-- Single Product Card -->
                            <div class="card cardforAcFire" data-form-type="single">
                                <div class="card-content">
                                    <div class="formtypecard_icon">
                                        <img src="{{asset('assets/img/newimages/box(1).png')}}" alt="">
                                    </div>
                                    <h2 class="card-title">Single Product</h2>
                                    <div class="radio-container">
                                        <input type="radio" id="radioSingle" name="formType" value="single" />
                                        <label for="radioSingle" class="radio-label"></label>
                                    </div>
                                </div>
                            </div>

                            <!-- Combo Product Card -->
                            <div class="card CardDual" data-form-type="combo">
                                <div class="card-content">
                                    <div class="formtypecard_icon">
                                        <img src="{{asset('assets/img/newimages/products.png')}}" alt="">
                                    </div>
                                    <h2 class="card-title">Combo Product</h2>
                                    <div class="radio-container">
                                        <input type="radio" id="radioCombo" name="formType" value="combo" />
                                        <label for="radioCombo" class="radio-label"></label>
                                    </div>
                                </div>
                            </div>

                            <input type="hidden" name="selectedFormType" id="selectedFormType" required />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="continueProcessBtn" class="btnContinueProcess editEnquiryBtn">
                            <div class="buttontext">
                                <div class="formediticon_modal">
                                    <iconify-icon icon="uit:process"></iconify-icon>
                                </div>
                                Continue to Process
                            </div>
                            <iconify-icon icon="bi:arrow-right"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

