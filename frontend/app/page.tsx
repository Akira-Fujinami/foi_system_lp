"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

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

type SiteSettingsResponse = {
  logo_url: string | null;
  logo_alt: string;
};

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type ComparisonMark = "circle" | "triangle" | string;

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

  const [siteSettings, setSiteSettings] = useState<SiteSettingsResponse>({
    logo_url: null,
    logo_alt: "Fuji of Innovation ロゴ",
  });
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  const problems = [
    {
      title: "Excel・紙・LINEでの管理がバラバラになっている",
      icon: "🗂️",
    },
    {
      title: "問い合わせや予約対応が属人化している",
      icon: "📩",
    },
    {
      title: "既製品を入れても業務に合わない",
      icon: "🧩",
    },
    {
      title: "ホームページだけでなく、管理機能までまとめて相談したい",
      icon: "🖥️",
    },
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

  const benefits = [
    {
      title: "業務の一元化",
      description:
        "顧客情報、予約、問い合わせ、更新作業などをまとめて管理しやすくなります。",
    },
    {
      title: "対応漏れの防止",
      description:
        "属人的な管理から脱却し、確認漏れや返信漏れ、引き継ぎ漏れを減らします。",
    },
    {
      title: "手作業の削減",
      description:
        "Excel転記や手入力を減らし、日々の運用負荷を下げる仕組みを作ります。",
    },
    {
      title: "将来の拡張がしやすい",
      description:
        "最初は必要最低限で導入し、運用しながら機能を追加できる構成で進められます。",
    },
  ];

  const pricePlans = [
    {
      title: "小規模な業務改善ツール",
      regularPrice: "通常 30万円〜",
      campaignPrice: "10万円〜",
      description:
        "キャンペーン期間中の特別価格。まずは必要最低限の機能から導入したい方向けのプランです。",
      items: ["簡易管理画面", "問い合わせ管理", "社内向け業務ツール"],
    },
    {
      title: "予約・顧客管理システム",
      regularPrice: "通常 50万円〜",
      campaignPrice: "30万円〜",
      description:
        "キャンペーン期間中の特別価格。予約受付や顧客情報管理、ログイン機能など、日々の運用改善まで踏み込んだシステムです。",
      items: ["予約受付機能", "顧客情報の一元管理", "ログイン・マイページ機能", "通知・管理機能"],
      featured: true,
    },
    {
      title: "AI活用・業務自動化システム",
      regularPrice: "通常 80万円〜",
      campaignPrice: "50万円〜",
      description:
        "キャンペーン期間中の特別価格。予約・顧客管理に加え、AIや自動化機能、分析機能、外部連携まで含めた本格的な業務改善向けプランです。",
      items: ["AIチャット・自動返信", "顧客対応の自動化", "分析ダッシュボード", "外部サービス連携"],
    },
    {
      title: "要件整理からの個別開発",
      regularPrice: "",
      campaignPrice: "別途お見積もり",
      description:
        "独自業務フローや複数機能の組み合わせが必要な場合に対応します。",
      items: ["業務フロー整理", "独自要件への対応", "段階開発のご提案"],
    },
  ];

  const cases = [
    {
      title: "予約受付を電話中心からWeb化",
      industry: "サービス業・店舗向け",
      description:
        "電話や手書きで管理していた予約受付をWeb化し、受付状況や顧客情報をまとめて確認しやすくする構成です。",
      points: ["予約状況を一覧化", "受付ミスの削減", "顧客情報の蓄積"],
    },
    {
      title: "問い合わせ管理をExcelから一元化",
      industry: "中小企業・個人事業主向け",
      description:
        "メールやフォーム、Excelで分散していた問い合わせ情報を、管理画面で確認・対応できる形に整理します。",
      points: ["対応状況の見える化", "引き継ぎしやすい", "返信漏れ防止"],
    },
    {
      title: "会員向けログインページを構築",
      industry: "スクール・コミュニティ・会員制事業向け",
      description:
        "一般公開ページとは別に、会員ごとに使える専用機能や閲覧制限付きコンテンツを設計します。",
      points: ["ログイン管理", "限定情報の表示", "会員向け導線の整理"],
    },
  ];

  const comparisonRows = [
    {
      item: "初期費用",
      budget: "抑えやすい",
      nocode: "抑えやすい",
      large: "高くなりやすい",
      foi: "目的に応じて調整しやすい",
      isSymbol: false,
    },
    {
      item: "デザイン対応",
      budget: "circle",
      nocode: "triangle",
      large: "circle",
      foi: "circle",
      isSymbol: true,
    },
    {
      item: "業務に合わせた設計",
      budget: "triangle",
      nocode: "triangle",
      large: "circle",
      foi: "circle",
      isSymbol: true,
    },
    {
      item: "小さく始めやすさ",
      budget: "circle",
      nocode: "circle",
      large: "triangle",
      foi: "circle",
      isSymbol: true,
    },
    {
      item: "管理画面・業務機能",
      budget: "triangle",
      nocode: "circle",
      large: "circle",
      foi: "circle",
      isSymbol: true,
    },
    {
      item: "ホームページと一体設計",
      budget: "triangle",
      nocode: "triangle",
      large: "circle",
      foi: "circle",
      isSymbol: true,
    },
    {
      item: "公開後の改善相談",
      budget: "triangle",
      nocode: "triangle",
      large: "circle",
      foi: "circle",
      isSymbol: true,
    },
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

  const fallbackFaqs: FaqItem[] = [
    {
      id: 1,
      question: "サーバーやドメインの準備ができていなくても大丈夫ですか？",
      answer:
        "はい、大丈夫です。サーバー・ドメインの契約状況を確認しながら、必要に応じて準備や構成のご相談にも対応します。",
    },
    {
      id: 2,
      question: "どのような業務システムを開発できますか？",
      answer:
        "お問い合わせ管理、予約管理、顧客管理、勤怠管理、在庫管理、売上管理など、業務に合わせたシステム開発に対応しています。",
    },
    {
      id: 3,
      question: "要件がまだ整理できていなくても相談できますか？",
      answer:
        "はい、可能です。現状の業務フローや課題をヒアリングしながら、必要な機能や優先順位を一緒に整理していきます。",
    },
    {
      id: 4,
      question: "小規模なツール開発からでも依頼できますか？",
      answer:
        "はい。最初は必要最低限の機能から小さく始め、運用しながら改善・拡張していく進め方にも対応しています。",
    },
  ];

  const renderComparisonMark = (value: ComparisonMark, isFoi = false) => {
    const circleBorderClass = isFoi ? "border-sky-500" : "border-slate-500";
    const triangleTextClass = isFoi ? "text-sky-500" : "text-slate-500";

    if (value === "circle") {
      return (
        <span
          className={`inline-block h-8 w-8 rounded-full border-[2.5px] ${circleBorderClass}`}
          aria-label="対応"
        />
      );
    }

    if (value === "triangle") {
      return (
        <span
          className={`inline-flex items-center justify-center text-[2.2rem] font-semibold leading-none ${triangleTextClass}`}
          aria-label="一部対応"
        >
          △
        </span>
      );
    }

    return <span>{value}</span>;
  };

  const scrollToId = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        "https://api.web-system.fujiofinnovation.com";

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

  useEffect(() => {
    const apiBase =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://api.web-system.fujiofinnovation.com";

    const fetchPublicData = async () => {
      try {
        const [settingsRes, faqsRes] = await Promise.allSettled([
          fetch(`${apiBase}/api/public/site-settings`, {
            cache: "no-store",
          }),
          fetch(`${apiBase}/api/public/faqs`, {
            cache: "no-store",
          }),
        ]);

        if (settingsRes.status === "fulfilled" && settingsRes.value.ok) {
          const settingsData: SiteSettingsResponse =
            await settingsRes.value.json();
          setSiteSettings({
            logo_url: settingsData.logo_url,
            logo_alt: settingsData.logo_alt || "Fuji of Innovation ロゴ",
          });
        }

        if (faqsRes.status === "fulfilled" && faqsRes.value.ok) {
          const faqData: FaqItem[] = await faqsRes.value.json();
          setFaqs(faqData);
        }
      } catch (error) {
        console.error("公開データの取得に失敗しました", error);
      }
    };

    fetchPublicData();
  }, []);

  const displayFaqs = faqs.length > 0 ? faqs : fallbackFaqs;

  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: displayFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  }, [displayFaqs]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Webシステム開発",
    name: "業務システム開発・Webシステム開発",
    description:
      "予約管理、顧客管理、問い合わせ管理、会員機能、管理画面・CMS構築など、業務に合わせたWebシステム開発サービス。",
    provider: {
      "@type": "Organization",
      name: "Fuji of Innovation",
      url: "https://web-system.fujiofinnovation.com",
    },
    areaServed: "JP",
  };

  return (
    <>
      <Script
        id="ld-json-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.18),transparent_24%)]" />

          <div className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-6 pt-6 md:px-10 md:pt-8">
              <header className="flex items-center justify-between gap-6">
                <a href="/" className="inline-flex -translate-y-3 items-center">
                  {siteSettings.logo_url ? (
                    <Image
                      src={siteSettings.logo_url}
                      alt={siteSettings.logo_alt}
                      width={220}
                      height={90}
                      className="h-auto w-[120px] md:w-[150px]"
                      priority
                      unoptimized
                    />
                  ) : (
                    <div className="text-lg font-semibold text-white">
                      Fuji of Innovation
                    </div>
                  )}
                </a>
              </header>
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="mt-6 md:mt-10">
                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  業務に合わせた
                  <span className="block text-sky-300">
                    Webシステムを、実用的に。
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                  予約管理、顧客管理、問い合わせ管理、会員機能、管理画面構築まで。
                  Fuji of Innovation は、見た目だけで終わらない、現場で使える
                  Webシステムを設計・開発します。
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    onClick={scrollToId("contact")}
                    className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
                  >
                    無料相談をする
                  </a>
                  <a
                    href="#price"
                    onClick={scrollToId("price")}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    料金の目安を見る
                  </a>
                </div>

                <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                  {[
                    "要件未整理でも相談OK",
                    "小さく始める開発に対応",
                    "HP＋管理機能を一体提案",
                    "保守・改善も相談可能",
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
              <br />
              Fuji of Innovation は、そうした現場の課題に対して、使いやすい形で仕組みを整えます。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-cyan-100 text-2xl shadow-sm">
                  <span aria-hidden>{problem.icon}</span>
                </div>
                <p className="text-sm leading-7 text-slate-700">{problem.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Benefits
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                導入後に期待できること
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                単に機能を増やすのではなく、日々の運用を楽にし、事業の流れを整えることを目指します。
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-32 py-20">
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

        <section
          id="strengths"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
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

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Comparison
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Fuji of Innovation が選ばれる理由
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                格安制作、既製ツール、大規模開発会社など、選択肢はいくつかあります。
                <br />
                Fuji of Innovation では、見た目だけでも、過剰な開発でもない、現場で使いやすいちょうどよい形をご提案します。
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full border-collapse text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold">項目</th>
                    <th className="px-5 py-4 text-sm font-semibold">格安HP制作</th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      ノーコード・既製ツール
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      大規模開発会社
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold text-sky-300">
                      Fuji of Innovation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.item}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-900">
                        {row.item}
                      </th>

                      <td
                        className={`px-5 py-4 ${
                          row.isSymbol
                            ? "text-center align-middle"
                            : "text-sm leading-7 text-slate-600"
                        }`}
                      >
                        {row.isSymbol ? renderComparisonMark(row.budget) : row.budget}
                      </td>

                      <td
                        className={`px-5 py-4 ${
                          row.isSymbol
                            ? "text-center align-middle"
                            : "text-sm leading-7 text-slate-600"
                        }`}
                      >
                        {row.isSymbol ? renderComparisonMark(row.nocode) : row.nocode}
                      </td>

                      <td
                        className={`px-5 py-4 ${
                          row.isSymbol
                            ? "text-center align-middle"
                            : "text-sm leading-7 text-slate-600"
                        }`}
                      >
                        {row.isSymbol ? renderComparisonMark(row.large) : row.large}
                      </td>

                      <td
                        className={`px-5 py-4 ${
                          row.isSymbol
                            ? "text-center align-middle"
                            : "text-sm font-semibold leading-7 text-sky-700"
                        }`}
                      >
                        {row.isSymbol ? renderComparisonMark(row.foi, true) : row.foi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              ※ 一般的な傾向をもとにした比較イメージです。案件内容や依頼先により異なります。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Examples
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              開発できるWebシステムの例
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              フルスクラッチでの構築はもちろん、必要な機能から段階的に導入することも可能です。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <div
                key={example}
                className="rounded-3xl border border-slate-200 bg-white px-5 py-5 text-sm font-medium text-slate-900 shadow-sm"
              >
                {example}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Case
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                実績・導入イメージ
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                まだ公開実績が多くない場合でも、どのような課題に対してどんな仕組みを作れるかをイメージしやすく整理しています。
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {cases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <p className="text-sm font-semibold text-sky-600">{item.industry}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="scroll-mt-32 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Price
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-bold md:text-4xl">料金の目安</h2>
                <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                  キャンペーン価格
                </span>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                現在キャンペーン中のため、通常価格より抑えた特別価格でご案内しています。
                <br />
                まずは必要な機能に絞って、小さく始められるプランをご用意しています。
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {pricePlans.map((plan) => (
                <div
                  key={plan.title}
                  className={`rounded-3xl border p-7 shadow-sm ${
                    plan.featured
                      ? "border-sky-500 bg-sky-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.featured && (
                    <span className="inline-flex rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
                      おすすめ
                    </span>
                  )}

                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {plan.title}
                  </h3>

                  <div className="mt-4">
                    {plan.regularPrice ? (
                      <p className="text-sm font-medium text-slate-400 line-through">
                        {plan.regularPrice}
                      </p>
                    ) : (
                      <p className="text-sm font-medium text-transparent">—</p>
                    )}

                    <p className="mt-1 text-3xl font-bold text-slate-900">
                      {plan.campaignPrice}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {plan.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-7 text-slate-700">
                ※ 上記はキャンペーン期間中の特別価格です。機能の範囲、ページ数、外部連携、
                会員機能の有無などにより変動します。内容によっては別途お見積もりとなります。
              </p>
            </div>
          </div>
        </section>

        <section
          id="flow"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
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
                <div className="text-sm font-semibold text-sky-600">{item.step}</div>
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

        <section id="faq" className="scroll-mt-32 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                よくあるご質問
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                導入前によくいただくご質問をまとめています。要件が固まっていない場合でも、ご相談しながら進められます。
              </p>
            </div>

            <div className="mt-10 grid w-full gap-4">
              {displayFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-32 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-4xl md:ml-8 lg:ml-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                <span className="block">ご相談内容に合わせてご提案します。</span>
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                現在の運用方法、課題、作りたい機能、ご予算感などをもとに、
                無理のない進め方をご提案します。
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    お名前 *
                  </label>
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
                  <label className="mb-2 block text-sm font-semibold">
                    メールアドレス *
                  </label>
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
                  <label className="mb-2 block text-sm font-semibold">
                    お問い合わせ種別
                  </label>
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

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    ご予算感
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder="例：30万円以内 / まずは相談"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold">
                    ご希望時期
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    placeholder="例：2ヶ月以内 / できるだけ早く"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold">件名</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="例：予約管理システムの相談"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  ご相談内容 *
                </label>
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

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-slate-500">
                  要件未整理・概算相談・小規模なご相談でも問題ありません。
                </p>
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
    </>
  );
}