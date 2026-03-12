"use client";

import Image from "next/image";
import { useState } from "react";

type ContactForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiry_type: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
};

const initialForm: ContactForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  inquiry_type: "web_system",
  subject: "",
  message: "",
  budget: "",
  timeline: "",
};

export default function FoiWebSystemLpPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const problems = [
    "Excel・紙・LINEでの管理がバラバラになっている",
    "問い合わせや予約対応が属人化している",
    "既製品を入れても業務に合わない",
    "ホームページだけでなく、管理機能までまとめて相談したい",
  ];

  const services = [
    {
      title: "業務に合わせたWebシステム開発",
      description:
        "予約管理、顧客管理、問い合わせ管理、会員機能など、現場の流れに合わせて設計・開発します。",
    },
    {
      title: "管理画面・CMS構築",
      description:
        "お知らせ更新、画像差し替え、投稿管理など、社内で運用しやすい更新機能を構築します。",
    },
    {
      title: "ホームページ＋システムの一体設計",
      description:
        "見た目だけで終わらず、集客導線と運用フローまで考えたサイト・システムをまとめてご提案します。",
    },
    {
      title: "小さく始めて拡張できる開発",
      description:
        "最初から大きく作りすぎず、必要な機能から導入し、運用しながら改善・追加できる形で進めます。",
    },
  ];

  const strengths = [
    {
      title: "Web制作だけで終わらない",
      description:
        "LP・コーポレートサイト制作だけでなく、その先の予約、問い合わせ、顧客管理、会員機能まで一気通貫で対応できます。",
    },
    {
      title: "現場に合わせて設計できる",
      description:
        "テンプレートの押し込みではなく、実際の業務フローや運用体制を整理した上で、ちょうどいい仕組みを形にします。",
    },
    {
      title: "デザインと開発を両立",
      description:
        "見た目の印象と使いやすさの両方を重視し、事業に必要な導線設計まで含めて構築します。",
    },
    {
      title: "中小企業・個人事業主にも導入しやすい",
      description:
        "必要な機能から小さく始められるため、初めてのシステム導入でも進めやすい構成をご提案できます。",
    },
  ];

  const examples = [
    "予約管理システム",
    "問い合わせ管理システム",
    "顧客管理システム",
    "会員サイト・ログイン機能",
    "勤怠・シフト管理システム",
    "応募者管理・社内管理画面",
  ];

  const flow = [
    {
      step: "01",
      title: "無料相談",
      description:
        "まずは現状のお悩みや、やりたいことを整理するところからスタートします。",
    },
    {
      step: "02",
      title: "ヒアリング・要件整理",
      description:
        "業務の流れ、必要機能、更新内容、ご予算感をもとに優先順位を整理します。",
    },
    {
      step: "03",
      title: "ご提案・お見積もり",
      description:
        "必要な機能に絞った現実的な開発プランをご提案します。",
    },
    {
      step: "04",
      title: "設計・開発",
      description:
        "デザイン・導線・管理機能・システム部分をまとめて制作します。",
    },
    {
      step: "05",
      title: "公開・運用改善",
      description:
        "公開後も更新や改善を前提に、運用しやすい状態で引き渡します。",
    },
  ];

  const faqs = [
    {
      q: "まだ何を作るべきか明確でなくても相談できますか？",
      a: "可能です。現状の業務や課題を伺いながら、どこをシステム化するべきか一緒に整理します。",
    },
    {
      q: "ホームページと管理機能をまとめてお願いできますか？",
      a: "はい。公開サイトと管理画面、問い合わせ導線、更新機能まで一体でご相談いただけます。",
    },
    {
      q: "小規模な依頼でも対応できますか？",
      a: "対応可能です。最初は必要な機能だけ導入し、後から追加していく進め方にも対応しています。",
    },
    {
      q: "公開後の修正や保守もお願いできますか？",
      a: "はい。運用フェーズでの改修や機能追加も見据えたご相談が可能です。",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const apiBase =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

      const res = await fetch(`${apiBase}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data?.errors) {
          const firstError = Object.values(data.errors)[0];
          const message = Array.isArray(firstError)
            ? String(firstError[0])
            : "入力内容をご確認ください。";
          throw new Error(message);
        }

        throw new Error(data?.message || "送信に失敗しました。");
      }

      setSuccessMessage("お問い合わせを送信しました。");
      setForm(initialForm);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "送信に失敗しました。"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.18),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-6 md:px-10 md:pt-8">
          <header className="flex items-center">
            <a href="/" className="inline-flex items-center">
              <Image
                src="/images/FOI_logo.png"
                alt="Fuji of Innovation ロゴ"
                width={180}
                height={60}
                className="h-auto w-[110px] md:w-[135px]"
                priority
              />
            </a>
          </header>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                業務に合わせた
                <span className="block text-sky-300">Webシステムを、実用的に。</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                予約管理、顧客管理、問い合わせ管理、会員機能、管理画面構築まで。
                Fuji of Innovation は、見た目だけで終わらない、現場で使える
                Webシステムを設計・開発します。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
                >
                  無料相談をする
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  できることを見る
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur">
              <div className="rounded-2xl bg-slate-950/80 p-5">
                <p className="text-sm font-semibold text-sky-300">
                  こんなご相談に対応できます
                </p>
                <div className="mt-5 grid gap-4">
                  {[
                    "予約受付の自動化",
                    "顧客情報の一元管理",
                    "問い合わせ対応の整理",
                    "ログイン・会員機能の追加",
                    "社内向け管理画面の構築",
                    "ホームページと業務導線の一体設計",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Problems
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            こんなお悩みはありませんか？
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            既製のツールでは合わない、管理がバラバラ、更新がしづらい。
            Fuji of Innovation は、そうした現場の課題に対して、使いやすい形で
            仕組みを整えます。
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl bg-sky-100" />
              <p className="text-sm leading-7 text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Fuji of Innovation ができること
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              ホームページ制作だけでなく、その先の業務改善まで見据えた
              Webシステム開発に対応しています。
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Strengths
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              作ることではなく、
              <span className="block">使われることを重視します。</span>
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Fuji of Innovation は、ただ開発するだけではなく、運用のしやすさ、
              更新のしやすさ、事業へのつながりまで考えて設計します。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="rounded-3xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Examples
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              開発できるWebシステムの例
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              フルスクラッチでの構築はもちろん、必要な機能から段階的に導入することも可能です。
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <div
                key={example}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 text-sm font-medium text-slate-100"
              >
                {example}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Flow
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            ご相談から公開までの流れ
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            システム化したい内容が曖昧な状態でも問題ありません。ヒアリングしながら、
            優先順位を整理してご提案します。
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {flow.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-sky-600">
                {item.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              よくあるご質問
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-r from-sky-500 to-cyan-400 py-20 text-slate-950"
      >
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/70">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              業務に合ったWebシステムを、
              <span className="block">整理するところからご相談ください。</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-900/80">
              何を作るべきか明確でない段階でも大丈夫です。現状の課題を伺いながら、
              必要な機能や進め方をご提案します。
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">お名前 *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">会社名</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">メールアドレス *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">電話番号</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">お問い合わせ種別</label>
                <select
                  name="inquiry_type"
                  value={form.inquiry_type}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                >
                  <option value="web_system">Webシステム開発</option>
                  <option value="website">ホームページ制作</option>
                  <option value="cms">CMS・更新機能</option>
                  <option value="reservation">予約システム</option>
                  <option value="customer_management">顧客管理</option>
                  <option value="attendance">勤怠・業務管理</option>
                  <option value="estimate">見積もり依頼</option>
                  <option value="other">その他</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">ご相談内容 *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                placeholder="現在の課題、作りたい機能、希望内容などをご記入ください。"
                required
              />
            </div>

            {successMessage && (
              <p className="mt-4 rounded-2xl bg-emerald-100 px-4 py-3 text-sm text-emerald-800">
                {successMessage}
              </p>
            )}

            {errorMessage && (
              <p className="mt-4 rounded-2xl bg-red-100 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </p>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "送信中..." : "お問い合わせを送信する"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}