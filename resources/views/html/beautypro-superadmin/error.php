<?php include("header.php") ?>

<style>
    .ErrorWrapper{
        width:100%;
        height:90vh;
    }
    .Errornetwork_image img{
        width: 25%;
        margin: 0 auto;
    }
    .networkerrorCard {
    text-align: center;
}
.ErrorWrapper .card{
        height:90vh;
        border: none !important;
    }
    .errorContent_wrap{
        padding:20px 0px;
    }
  
    .errorContent_wrap {
    padding: 20px 0px;
    width: 45%;
    margin: 0 auto;
}
.errorContent_wrap h2 {
    font-size: 30px;
    margin-bottom: 10px;
}
.errorContent_wrap p {
    font-size: 16px;
    color: #625b8d;
}
</style>

<div class="page-wrapper">
    <div class="content">
        <div class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
            <div class="my-auto ">
                <h2 class="mb-1">NetWork Error</h2>
            </div>
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                <div class="head-icons ms-2 headicon_innerpage">
                    <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-original-title="Collapse" id="collapse-header">
                        <i class="ti ti-chevrons-up"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="ErrorWrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="networkerrorCard">
                                    <div class="Errornetwork_image">
                                        <img src="assets/img/network-failure.png" alt="">
                                    </div>
                                    <div class="errorContent_wrap">
                                        <h2>Network connection failure</h2>
                                        <p>Oops! It looks like you're offline or experiencing connectivity issues. Please check your internet connection and try again.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<?php include("footer.php") ?>