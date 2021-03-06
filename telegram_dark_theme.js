function applycss(css){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}
applycss(`
  body,
.modal-content
  {
    color: #bbb !important;
    background: #252525 !important;
  }

  a.tg_checkbox
  {
    color: #bbb !important;
  }

  .im_page_wrap
  {
    /*background color of contentwrapper under header*/
    background-color: #303030 !important;
    border-left: 1px solid #4d4d4d !important;
    border-right: 1px solid #4d4d4d !important;
    border-bottom: 1px solid #4d4d4d !important;
    box-shadow: none;
  }

  .im_message_body,
.im_attach,
.im_media_attach,
.im_record,
.im_record_bg,
.im_record:hover,
.im_message_document_thumbed,
.composer_emoji_panel a.composer_emoji_btn
  {
    background: inherit !important;
  }

  .im_dialog_peer
  {
    /*peer nickname unselected*/
    color: #bbb !important;
  }

  .contacts_modal_members_list a.contacts_modal_contact
  {
    /*nicknames in contactlist via hamburger menu*/
    color: #bbb;
  }

  .active a.im_dialog
  {
    /*selected peer */
    background-color: #4d4d4d !important;
  }

  .tg_head_split,
.md_modal_head
  {
    /*page header block*/
    background-color: #4d4d4d !important;
  }

  .dropdown.open .tg_head_btn,
.tg_head_btn:hover
  {
    background: #4d4d4d !important;
  }

  .form-control
  {
    /*input field*/
    background-color: #0e0e0e !important;
    color: #bbb !important;
  }

  .composer_rich_textarea
  {
    background: #303030 !important;
    border-color: #bbb !important;
  }

  .im_dialogs_col_wrap
  {
    /*contactlist right border*/
    border-right: 2px solid #4d4d4d;
  }

  .im_dialogs_col .nano > .nano-pane > .nano-slider
  {
    /*scrollbarbutton when hover*/
    background-color: #4d4d4d !important;
  }

  code, pre
  {
    background-color: #bbb !important;
    color: #0e0e0e;
    border: none !important;
  }

  .tg_head_split
  {
    background-color: #151515;
  }

  .im_submit
  {
    color: #4d4d4d;
  }

  .im_message_mymention
  {
    background: #1d1d1d;
  }

  .im_message_focus .im_message_outer_wrap
  {
    background-color: #4d4d4d;
  }

  .im_message_selected .im_message_outer_wrap
  {
    background: #4d4d4d;
  }

  a:hover
  {
    background-color: #282828 !important;
  }

  .im_message_unread_split
  {
    background: #4d4d4d;
  }
  
  @keyframes im_message_focus_fade
  {
    0% {
        /*soft transaction*/
        
        background-color: #2d2d2d;
        }
  }

.btn-primary
{
  background-color: #4d4d4d;
}

.im_history_select_active .im_message_outer_wrap:hover
{
  background: #4d4d4d;
}

.im_dialog_chat_from_wrap,
.im_dialog_message_service
{
  color: #6ac;
}

.composer_rich_textarea,
.composer_textarea
{
  box-shadow: 0px 3px 1px #ddd;
}

.composer_rich_textarea:focus
{
  box-shadow: 0px 3px 1px #ddd !important;
}

.tg_head_logo_dropdown .dropdown-menu > li > a
{
  color: #ddd;
}

.btn-primary.disabled,
.btn-primary[disabled]
{
  background: #4d4d4d none repeat scroll 0% 0%;
}
/*emoji*/

.composer_emoji_tooltip,
.icon-tooltip-tail,
.dropdown-menu
{
  background-color: #4d4d4d !important;
  border-color: #5d5d5d;
}

.im_dialog_badge.badge
{
  background-color: #bfbfbf30 !important;
}

.im_message_selected .im_message_outer_wrap,
.im_history_select_active .im_message_outer_wrap:hover
{
  background-color: #4d4d4d !important;
}

.reply_markup_button
{
  color: #FFFFFF !important;
  background-color: #666666 !important;
}

.reply_markup_button:focus, .reply_markup_button:hover
{
  color: #FFFFFF !important;
  background-color: #4d4d4d !important;
}

.tg_head_logo_dropdown .dropdown-menu > li > a,
.dropdown-menu>li>a, .dropdown-menu>li>a,
.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover
{
  color: #FFFFFF !important;
}
`);
