import { gql } from "apollo-server";

// schema generated with: https://walmartlabs.github.io/json-to-simple-graphql-schema/
export const settingsSchema = gql`
    type Reactions {
        name: String
        emoji: String
        label: String
    }

    type Subtopics {
        id: Int
        name: String
        label: String
    }

    type Subjects {
        id: Int
        name: String
        blurb: String
        available: Boolean
        identifier: String
        retake_exam_in_days: Int
        exam_pass_score: Int
        exam_total_questions: Int
        exam_duration_minutes: Int
        disable_onboarding: Boolean
        subtopics: [Subtopics]
    }

    type AchievementSettings {
        max_in_time_window: Int
        seconds_in_time_window: Int
        seconds_until_remind: Int
    }

    type Definitions {
        name: String
        achievement_type: String
        emoji_url: String
        earn_by_student_copy: String
        portal_url: String
        portal_url_gray: String
        tutor_tooltip_copy: String
        tutor_modal_copy: String
        example_url: String
        canned_responses: [String]
    }

    type Achievements {
        settings: AchievementSettings
        definitions: [Definitions]
    }

    type ResumeSession {
        name: String
        typing_duration_seconds: Int
        token: String
        messages: [[String]]
    }

    type ScriptNodes {
        resume_session: ResumeSession
    }

    type ChatBotScript {
        resume_session_script_root_node_id: String
        script_nodes: ScriptNodes
    }

    type CancellationReasons {
        id: Int
        reason: String
    }

    type MarketingCopy {
        account_screen_incentive: String
        pause_incentive: String
        pause_incentive_short: String
        store_carousel: [String]
    }

    type MarketingContent {
        name_mobile: String
        name_web: String
        savings_percentage: Int
        eligible_for_pause: Boolean
    }

    type PythagorasPlans {
        productID: String
        amount: Int
        name: String
        name_short: String
        name_long: String
        cpm_message: String
        cpm: Int
        product_type: String
        sku: String
        duration_days: Int
        is_family_bundle: Boolean
        trial_eligible: Boolean
        charged_in_installments: Boolean
        day_pass_duration_days: Int
        free_minutes: Int
        title: String
        price: Int
        old_price: Int
        next_payment_price: Int
        unlimited: Boolean
        cost_per_hour: Int
        charge_overages_by_hour: Boolean
        family_price: Int
        savings_percentage: Int
        eligible_for_pause: Boolean
        popular: Boolean
        marketing_content: MarketingContent
    }

    type Plans {
        productID: String
        amount: Int
        name: String
        name_short: String
        name_long: String
        cpm_message: String
        cpm: Int
        product_type: String
        sku: String
        duration_days: Int
        is_family_bundle: Boolean
        num_installments: Int
        seconds_between_installments: Int
        trial_eligible: Boolean
        charged_in_installments: Boolean
        day_pass_duration_days: Int
        free_minutes: Int
        title: String
        price: Int
        old_price: Int
        next_payment_price: Int
        unlimited: Boolean
        cost_per_hour: Int
        charge_overages_by_hour: Boolean
        family_price: Int
        savings_percentage: Int
        eligible_for_pause: Boolean
        popular: Boolean
        marketing_content: MarketingContent
    }

    type Subscription {
        show_trial_promo: Boolean
        pause_incentive_token: String
        pause_incentive: Int
        pause_incentive_message: String
        cancellation_reasons: [CancellationReasons]
        marketing_copy: MarketingCopy
        pythagoras_plans: [PythagorasPlans]
        plans: [Plans]
    }

    type SessionCancelReasons {
        id: Int
        reason: String
    }

    type UpsellBannerStates {
        Refer: String
        None: String
        Subscribe: String
        AddCard: String
        FacebookInviteAll: String
    }

    type CurrentAppStoreVersions {
        iOS: String
        android: String
    }

    type Feedback {
        phone_number: String
        email: String
        subject: String
        message: String
    }

    type Upgrade {
        title: String
        subtitle: String
        cta: String
    }

    type Upsell {
        title: String
        subtitle: String
        cta: String
    }

    type Banner {
        enabled: Boolean
        title: String
        subtitle: String
        cta: String
        upgrade: Upgrade
        upsell: Upsell
    }

    type StudentCannedResponses {
        name: String
        label: String
        responses: [String]
    }

    type StaticPageMobileUrls {
        referral_url: String
        full_honor_pledge: String
        contact_us: String
        forgot_password: String
        legal: String
        faq: String
        what_we_cover: String
        privacy_policy: String
        free_trial_modal: String
        free_trial_modal_v2: String
        mobile_webviews_app: String
    }

    type Settings {
        traffic_status: String
        session_wait_time: String
        feedback_min_rating: Int
        replenishment_threshold: Int
        max_replenishment_amount: Int
        replenishment_interval: Int
        signup_account_allotment: Int
        courtesy_minutes: Int
        referral_minutes_amount: Int
        referrer_minutes_amount: Int
        added_payment_method_minutes_amount: Int
        email_confirmation_minutes: Int
        sessions_until_rating_prompt: Int
        fb_invite_minutes_amount: Int
        periodic_minutes_amount: Int
        referral_rewards_credit_card_added_amount: Int
        referral_rewards_subscription_made_amount: Int
        pay_as_you_go_per_minute_cost: Float
        support_email: String
        seconds_until_tutor_responding_alert: Int
        no_bot_finding_tutor_tip: String
        tutor_review_timeout: Int
        minimum_charge_minutes_amount: Int
        pay_as_you_go_disabled: Boolean
        payer_info_added_promotional_minutes: Int
        payer_info_verified_promotional_minutes: Int
        app_store_reviews_target_number: Int
        facebook_invite_all_limit: Int
        facebook_invite_all_amount: Int
        use_facebook_invite_fallback: Boolean
        session_share_message: String
        activity_timer: Int
        session_share_email_subject: String
        option_screen_timer: Int
        session_duration_for_upsell: Int
        post_session_duration_for_upsell: Int
        yup_monthly_price: Int
        idk_check_interval: Int
        idk_alert_text: String
        yup_sales_contact_phone_number: String
        dollar_referral_copy: String
        dollar_off_url: String
        practice_session_chat_bot_active_script: String
        practice_session_chat_bot_root_node: String
        tutor_lost_connection_threshold: Int
        tutor_slow_connection_threshold: Int
        tutor_live_whiteboard_reminder_timer: Int
        math_typing_alert_limit: Int
        trial_length: Int
        show_scheduling_tab: Boolean
        default_plan: String
        account_frozen_tell_parent_text: String
        answer_cost: Int
        facebook_invite_all_minutes_product_id: String
        dollar_referral_amount: Int
        dollar_referral_program_id: String
        facebook_display_name: String
        paywall_on_camera_screen: Boolean
        reactions: [Reactions]
        subjects: [Subjects]
        subtopics: [Subtopics]
        topics: [String]
        achievements: Achievements
        chat_bot_script: ChatBotScript
        subscription: Subscription
        session_cancel_reasons: [SessionCancelReasons]
        upsell_banner_states: UpsellBannerStates
        current_app_store_versions: CurrentAppStoreVersions
        feedback: Feedback
        banner: Banner
        plan_order: [String]
        student_canned_responses: [StudentCannedResponses]
        pre_session_questions: [String]
        latest_version_passed_review: [String]
        static_page_mobile_urls: StaticPageMobileUrls
        forced_update_versions_android: [String]
        forced_update_versions: [String]
    }
`;
