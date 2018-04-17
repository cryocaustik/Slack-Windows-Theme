document.addEventListener('DOMContentLoaded', function () {

    let tt__customCss = `
        /* you can customize this section with your own color prefs.  */
        body,
        .channel_header,
        #footer,
        .channel_title_info,
        #channel_topic_text {
        background: rgb(29, 32, 33);
        }

        .c-message__body {
        color: rgb(153, 174, 177);
        }

        #team_menu,
        .p-channel_sidebar {
        background: #17191a !important;
        }

        .c-presence--active {
        color: rgb(137, 202, 17) !important;
        }

        nav.p-channel_sidebar .p-channel_sidebar__channel--selected,
        .p-channel_sidebar__link--selected,
        .c-message_list__day_divider__label__pill,
        .p-message_pane .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider:before {
        color: #eee !important;
        background: rgb(77, 77, 77) !important;
        }

        .c-message_list__day_divider__line {
        border-top-color: rgb(60, 81, 94) !important
        }

        #msg_input,
        #primary_file_button {
        background: #17191a !important;
        }

        #msg_form #msg_input {
        border-color: transparent;
        }

        // temp fix for white chat background from recent slack-app update
        .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider {
        background: #222; !important
        }
    `;
    $.ajax({
        url: 'https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css',
        success: function (css) {
            $('<style></style>').appendTo('head').html(css + tt__customCss);
        }
    });
});