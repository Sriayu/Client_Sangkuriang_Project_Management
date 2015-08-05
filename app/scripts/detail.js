$(document).ready(function() {

	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
});


   $(document).ready(function ()
   {
      $("#btnShowComment").click(function (e)
      {
         ShowDialog(false);
         e.preventDefault();
      });

      $("#btnClose").click(function (e)
      {
         HideDialog();
         e.preventDefault();
      });

      $("#btnSubmit").click(function (e)
      {
         var brand = $("#brands textarea").val();
         $("#output").html("<b>Your favorite mobile brand: </b>" + brand);
         HideDialog();
         e.preventDefault();
      });

   });

   function ShowDialog(modal)
   {
      $("#overlay").show();
      $("#dialog").fadeIn(300);

      if (modal)
      {
         $("#overlay").unbind("click");
      }
      else
      {
         $("#overlay").click(function (e)
         {
            HideDialog();
         });
      }
   }

   function HideDialog()
   {
      $("#overlay").hide();
      $("#dialog").fadeOut(300);
   } 
   
   
                $(document).ready(function() {
                    var validator = $("#CommentForm").kendoValidator().data("kendoValidator"),
                    status = $(".status");
                    var temp= 0;
        
                    $("#CommentForm").submit(function(event) {  
                       
                       event.preventDefault();
                       var id_issue = $('[name=id_issue]').val();
                       var txt_comment = $('[name=txt_comment]').val();
                       var date = $('[name=date]').val();
					   var assigned_to = $('[name=assigned_to]').val();
					   
                     $.ajax({
                                        dataType : "json",
                                        url: "http://192.168.1.47:9000/api/service/comment",
                                        type: "POST",
                                        contentType: "application/x-www-form-urlencoded",
                                        data: "id_issue="+id_issue+"&txt_comment="+txt_comment+"&date="+date+"&assigned_to="+assigned_to,
                                       
										success : function (result) {
                                                    status.text("sukses!");
													window.location.href = "/#/issue_detail/"+id_issue;
                                                                         
                                         },
                                        error : function (test, errorThrown) {
                                                window.alert("gagal");
                                                temp = 0;
                                        },
                                       
                                    }); 
									HideDialog();
                    });
					
                });
   


