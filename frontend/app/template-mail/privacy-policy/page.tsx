import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Mail プライバシーポリシー | Fuji of Innovation",
  description:
    "Template Mailのプライバシーポリシーです。取得する情報、利用目的、第三者提供、保存期間、お問い合わせ窓口について掲載しています。",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://web-system.fujiofinnovation.com/template-mail/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-6 py-12 text-gray-900">
        <h1 className="mb-8 text-3xl font-bold">
          Template Mail プライバシーポリシー
        </h1>

        <div className="space-y-8 leading-8">
          <section>
            <p>
              株式会社Fuji of Innovation（以下「当社」といいます。）は、当社が提供するアプリ
              「Template Mail」（以下「本アプリ」といいます。）における、ユーザーの個人情報を含む利用情報の取扱いについて、
              以下のとおりプライバシーポリシーを定めます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">1. 取得する情報</h2>

            <h3 className="mt-4 mb-2 text-xl font-semibold">
              1-1. ユーザーが入力する情報
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>メールテンプレートの件名、本文、署名、差し込み項目</li>
            </ul>

            <h3 className="mt-4 mb-2 text-xl font-semibold">
            1-2. 本アプリの利用に伴い自動的に取得する情報
            </h3>
            <p>
            当社は、現在、本アプリの提供および品質改善のために必要な範囲で、
            端末情報、OS情報、利用状況、ログ情報、クラッシュ情報、診断情報、
            パフォーマンス情報等を取得することがあります。
            </p>
            <p className="mt-3">
            取得する情報の項目は、本アプリの機能追加、保守運用上の必要性、法令等に応じて変更される場合があります。
            重要な変更がある場合は、本ポリシーを改定のうえ通知します。
            </p>

            <h3 className="mt-4 mb-2 text-xl font-semibold">
              1-3. 外部サービス連携により取得する情報
            </h3>
            <p>
              本アプリが外部サービスと連携する場合、当社は当該連携のために必要な範囲で、外部サービス上の情報を取得することがあります。
              取得する情報の内容は、ユーザーが許可した範囲に限られます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              2. 取得した情報の利用目的
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>本アプリの提供、維持、改善のため</li>
              <li>ユーザー認証、本人確認、ログイン管理のため</li>
              <li>メールテンプレートの保存、編集、同期、表示のため</li>
              <li>お問い合わせへの対応のため</li>
              <li>不正利用の防止、セキュリティ確保のため</li>
              <li>障害調査、品質改善、利用状況分析のため</li>
              <li>新機能、更新情報、重要なお知らせの通知のため</li>
              <li>法令または利用規約に違反する行為への対応のため</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">3. AI機能に関する取扱い</h2>
            <p>
                本アプリは、AIを活用したメール文面の生成、補助、提案等の機能を提供しています。
                ユーザーが本アプリ上で入力したテキスト、指示内容、件名、本文その他AI機能の利用に関連する情報は、
                当該機能の提供に必要な範囲で、OpenAI APIを通じて送信され、処理されることがあります。
            </p>
            <p className="mt-3">
                当社は、AI機能の提供、出力品質の維持改善、障害解析、不正利用防止およびセキュリティ確保のために、
                必要な範囲で当該情報を利用します。
            </p>
            <p className="mt-3">
                当社は、ユーザー入力情報を適切に管理し、法令に基づく場合を除き、
                AI機能の提供に必要な範囲を超えて利用しません。
                また、OpenAI APIの利用にあたっては、適切な管理および安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">4. 第三者提供</h2>
            <p>
              当社は、次の場合を除き、ユーザーの個人情報を第三者に提供しません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>
                公衆衛生の向上または児童の健全な育成推進のために特に必要がある場合
              </li>
              <li>国の機関または地方公共団体等に協力する必要がある場合</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              5. 外部委託・外部サービス
            </h2>
            <p>
              当社は、本アプリの運営に必要な範囲で、以下の業務を外部事業者に委託することがあります。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>サーバー・クラウドインフラの提供</li>
              <li>データベース管理</li>
              <li>アプリ解析、障害監視</li>
              <li>認証サービス</li>
              <li>AI機能提供</li>
              <li>メール送信サービス</li>
            </ul>
            <p className="mt-3">
              この場合、当社は委託先を適切に監督し、ユーザー情報の安全管理が図られるよう努めます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">6. データの保存期間</h2>
            <p>
              当社は、取得した情報を、利用目的の達成に必要な期間または法令に基づき必要とされる期間保存します。
              保存の必要がなくなった情報については、合理的な期間内に削除または匿名化します。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              7. データの削除・利用停止
            </h2>
            <p>
              ユーザーは、当社所定の方法により、自己に関する情報の開示、訂正、削除、利用停止を求めることができます。
              退会後または削除依頼後は、法令上保存が必要な情報を除き、合理的な期間内に対応します。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">8. 安全管理措置</h2>
            <p>
              当社は、取得した情報について、漏えい、滅失、毀損、不正アクセス等を防止するため、
              必要かつ適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">9. 未成年者の利用</h2>
            <p>
              未成年者が本アプリを利用する場合は、必要に応じて保護者の同意を得たうえで利用してください。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">10. 本ポリシーの変更</h2>
            <p>
              当社は、必要に応じて、本プライバシーポリシーを変更することがあります。
              重要な変更を行う場合は、本アプリ内または当社ウェブサイト上で適切に通知します。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">11. お問い合わせ窓口</h2>
            <div className="space-y-1">
              <p>事業者名：株式会社Fuji of Innovation</p>
              <p>代表者名：藤波 晃</p>
              <p>メールアドレス：info@fujiofinnovation.com</p>
              <p>Webサイト：https://fujiofinnovation.com/</p>
            </div>
          </section>

          <section>
            <p>制定日：2026年3月17日</p>
          </section>
        </div>
      </main>
    </div>
  );
}