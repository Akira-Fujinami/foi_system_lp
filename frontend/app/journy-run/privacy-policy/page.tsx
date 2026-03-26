import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journy Run プライバシーポリシー",
  description:
    "Journy Runにおける個人情報および利用情報の取扱いについて定めたプライバシーポリシーです。",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Journy Run プライバシーポリシー
          </h1>

          <p className="mt-6 leading-8 text-slate-700">
            株式会社Fuji of Innovation（以下「当社」といいます。）は、当社が提供するアプリ
            「Journy Run」（以下「本アプリ」といいます。）における、ユーザーの個人情報を含む利用情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold">1. 取得する情報</h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    1-1. ユーザーが入力する情報
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                    <li>ニックネームまたはユーザー名</li>
                    <li>プロフィール情報（任意入力）</li>
                    <li>Start地点、Goal地点その他ランニング設定情報</li>
                    <li>お問い合わせ内容</li>
                    <li>ユーザーが任意に入力するメモ、コメントその他の情報</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    1-2. 本アプリの利用に伴い自動的に取得する情報
                  </h3>
                  <p className="mt-3 leading-8 text-slate-700">
                    当社は、本アプリの提供および品質改善のために必要な範囲で、以下の情報を自動的に取得することがあります。
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                    <li>端末情報</li>
                    <li>OS情報</li>
                    <li>アプリの利用状況</li>
                    <li>ログ情報</li>
                    <li>クラッシュ情報</li>
                    <li>診断情報</li>
                    <li>パフォーマンス情報</li>
                    <li>IPアドレス</li>
                    <li>Cookie、広告識別子、端末識別子その他これに類する情報</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    1-3. ランニング機能の提供に伴い取得する情報
                  </h3>
                  <p className="mt-3 leading-8 text-slate-700">
                    本アプリでは、ランニング記録機能および仮想ルート進行機能の提供のため、以下の情報を取得することがあります。
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                    <li>走行日時</li>
                    <li>走行距離</li>
                    <li>走行時間</li>
                    <li>ペース</li>
                    <li>消費カロリー</li>
                    <li>歩数</li>
                    <li>位置情報</li>
                    <li>移動経路</li>
                    <li>Start地点およびGoal地点</li>
                    <li>箱根駅伝を模した仮想コース上の進捗情報</li>
                    <li>その他、ランニング結果の表示や記録に必要な情報</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    1-4. 外部サービス連携により取得する情報
                  </h3>
                  <p className="mt-3 leading-8 text-slate-700">
                    本アプリがApple Health、Google
                    Fit、ウェアラブル端末、地図サービスその他の外部サービスと連携する場合、当社は当該連携のために必要な範囲で、外部サービス上の情報を取得することがあります。取得する情報の内容は、ユーザーが許可した範囲に限られます。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. 取得した情報の利用目的</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>本アプリの提供、維持、改善のため</li>
                <li>ランニング記録の保存、表示、分析のため</li>
                <li>Start地点、Goal地点および仮想ルート進行の表示のため</li>
                <li>箱根駅伝を模した仮想ラン体験の提供のため</li>
                <li>走行距離、時間、進捗、履歴、統計情報等の表示のため</li>
                <li>ユーザーごとの目標管理、達成状況の表示、パーソナライズのため</li>
                <li>お問い合わせへの対応のため</li>
                <li>不正利用の防止、セキュリティ確保のため</li>
                <li>障害調査、品質改善、利用状況分析のため</li>
                <li>新機能、更新情報、重要なお知らせの通知のため</li>
                <li>法令または利用規約に違反する行為への対応のため</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                3. 位置情報および健康関連情報の取扱い
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                本アプリは、ランニング記録機能、距離計測、移動経路の表示、Start地点およびGoal地点の設定、仮想コース進行表示等のため、位置情報を利用することがあります。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                また、本アプリが歩数、消費カロリー、心拍数その他の健康関連情報を取り扱う場合、当社は当該情報を本アプリの機能提供に必要な範囲でのみ利用し、法令に基づく場合を除き、ユーザーの同意なく目的外に利用しません。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                ユーザーは、端末の設定または外部サービスの設定により、位置情報や健康関連情報へのアクセス許可を変更または停止することができます。ただし、その場合、本アプリの一部機能が利用できなくなることがあります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. 第三者提供</h2>
              <p className="mt-4 leading-8 text-slate-700">
                当社は、次の場合を除き、ユーザーの個人情報を第三者に提供しません。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
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
              <h2 className="text-2xl font-semibold">5. 外部委託・外部サービス</h2>
              <p className="mt-4 leading-8 text-slate-700">
                当社は、本アプリの運営に必要な範囲で、以下の業務を外部事業者に委託することがあります。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                <li>サーバー・クラウドインフラの提供</li>
                <li>データベース管理</li>
                <li>アプリ解析、障害監視</li>
                <li>地図サービス</li>
                <li>位置情報処理サービス</li>
                <li>通知配信サービス</li>
                <li>分析サービス</li>
              </ul>
              <p className="mt-4 leading-8 text-slate-700">
                この場合、当社は委託先を適切に監督し、ユーザー情報の安全管理が図られるよう努めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. データの保存期間</h2>
              <p className="mt-4 leading-8 text-slate-700">
                当社は、取得した情報を、利用目的の達成に必要な期間または法令に基づき必要とされる期間保存します。保存の必要がなくなった情報については、合理的な期間内に削除または匿名化します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. データの削除・利用停止</h2>
              <p className="mt-4 leading-8 text-slate-700">
                ユーザーは、当社所定の方法により、自己に関する情報の開示、訂正、削除、利用停止を求めることができます。削除依頼後は、法令上保存が必要な情報を除き、合理的な期間内に対応します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. 安全管理措置</h2>
              <p className="mt-4 leading-8 text-slate-700">
                当社は、取得した情報について、漏えい、滅失、毀損、不正アクセス等を防止するため、必要かつ適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. 未成年者の利用</h2>
              <p className="mt-4 leading-8 text-slate-700">
                未成年者が本アプリを利用する場合は、必要に応じて保護者の同意を得たうえで利用してください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">10. 本ポリシーの変更</h2>
              <p className="mt-4 leading-8 text-slate-700">
                当社は、必要に応じて、本プライバシーポリシーを変更することがあります。重要な変更を行う場合は、本アプリ内または当社ウェブサイト上で適切に通知します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">11. お問い合わせ窓口</h2>
              <div className="mt-4 space-y-2 text-slate-700">
                <p>事業者名：株式会社Fuji of Innovation</p>
                <p>代表者名：藤波 晃</p>
                <p>メールアドレス：info@fujiofinnovation.com</p>
                <p>Webサイト：https://fujiofinnovation.com/</p>
                <p>制定日：2026年3月26日</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}